import { createClient } from "npm:@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const FROM = "VAVITAS Partnerships <partnerships@mail.vavitas-health.com>";
const REPLY_TO = "info@vavitas-health.com";
const INTERNAL_TO = "info@vavitas-health.com";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

interface InquiryPayload {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website?: string;
  phone?: string;
  country: string;
  interest: string;
  message: string;
}

function validate(b: any): { ok: true; data: InquiryPayload } | { ok: false; error: string } {
  if (!b || typeof b !== "object") return { ok: false, error: "Invalid body" };
  const req = ["firstName", "lastName", "email", "company", "country", "interest", "message"];
  for (const k of req) {
    if (typeof b[k] !== "string" || !b[k].trim()) return { ok: false, error: `Missing field: ${k}` };
    if (b[k].length > 5000) return { ok: false, error: `Field too long: ${k}` };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) return { ok: false, error: "Invalid email" };
  return {
    ok: true,
    data: {
      firstName: b.firstName.trim(),
      lastName: b.lastName.trim(),
      email: b.email.trim(),
      company: b.company.trim(),
      website: typeof b.website === "string" ? b.website.trim() : "",
      phone: typeof b.phone === "string" ? b.phone.trim() : "",
      country: b.country.trim(),
      interest: b.interest.trim(),
      message: b.message.trim(),
    },
  };
}

async function sendEmail(payload: Record<string, unknown>) {
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    console.error("Missing email credentials");
    return { ok: false, status: 500, body: "missing_credentials" };
  }
  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) console.error("Resend error", res.status, text);
  return { ok: res.ok, status: res.status, body: text };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const v = validate(body);
  if (!v.ok) {
    return new Response(JSON.stringify({ error: v.error }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  const d = v.data;

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const { data: inserted, error: dbError } = await supabase
    .from("partnership_inquiries")
    .insert({
      company_name: d.company,
      contact_name: `${d.firstName} ${d.lastName}`,
      email: d.email,
      phone: d.phone || null,
      country: d.country,
      partnership_type: d.interest,
      message: d.message,
    })
    .select("id")
    .single();

  if (dbError) {
    console.error("DB insert error", dbError);
    return new Response(JSON.stringify({ error: "Failed to save inquiry" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const fullName = `${d.firstName} ${d.lastName}`;
  const rows = [
    ["Name", fullName],
    ["Email", d.email],
    ["Company", d.company],
    ["Website", d.website || "—"],
    ["Phone", d.phone || "—"],
    ["Country / Region", d.country],
    ["Partnership Interest", d.interest],
  ];
  const internalHtml = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#1a1a1a;">
      <h2 style="color:#3AAFA9;margin:0 0 16px;">New Partnership Inquiry</h2>
      <p style="margin:0 0 16px;color:#555;">A new inquiry was submitted via the VAVITAS website.</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;background:#f7f7f5;border:1px solid #eee;width:35%;font-weight:600;">${escapeHtml(
                k
              )}</td><td style="padding:8px 12px;border:1px solid #eee;">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <div style="background:#f7f7f5;border-left:3px solid #3AAFA9;padding:14px 18px;white-space:pre-wrap;">${escapeHtml(
        d.message
      )}</div>
      <p style="font-size:12px;color:#888;margin-top:20px;">Inquiry ID: ${inserted.id}</p>
    </div>`;

  const confirmHtml = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#1a1a1a;">
      <h2 style="color:#3AAFA9;margin:0 0 16px;">Thank you for contacting VAVITAS</h2>
      <p>Hi ${escapeHtml(d.firstName)},</p>
      <p>Thank you for your interest in partnering with VAVITAS. We have received your inquiry and our partnerships team will review your message and follow up with you shortly.</p>
      <p style="margin:20px 0 8px;font-weight:600;">Your message:</p>
      <div style="background:#f7f7f5;border-left:3px solid #3AAFA9;padding:14px 18px;white-space:pre-wrap;">${escapeHtml(
        d.message
      )}</div>
      <p style="margin-top:24px;">If you need to add anything, simply reply to this email.</p>
      <p style="margin-top:24px;">— The VAVITAS Partnerships Team<br/><span style="color:#888;">Support Life, Over Time.®</span></p>
    </div>`;

  const [internal, confirm] = await Promise.all([
    sendEmail({
      from: FROM,
      to: [INTERNAL_TO],
      reply_to: d.email,
      subject: `New Partnership Inquiry — ${d.company} (${d.interest})`,
      html: internalHtml,
    }),
    sendEmail({
      from: FROM,
      to: [d.email],
      reply_to: REPLY_TO,
      subject: "We received your partnership inquiry — VAVITAS",
      html: confirmHtml,
    }),
  ]);

  if (!internal.ok || !confirm.ok) {
    return new Response(
      JSON.stringify({
        error: "Inquiry saved but email delivery failed",
        id: inserted.id,
        emails: {
          internal: { ok: internal.ok, status: internal.status, body: internal.body },
          confirmation: { ok: confirm.ok, status: confirm.status, body: confirm.body },
        },
      }),
      { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      id: inserted.id,
      emails: { internal: internal.ok, confirmation: confirm.ok },
    }),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});
