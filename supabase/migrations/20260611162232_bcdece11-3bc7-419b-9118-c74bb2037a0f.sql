CREATE TABLE public.partnership_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  partnership_type text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.partnership_inquiries TO anon, authenticated;
GRANT ALL ON public.partnership_inquiries TO service_role;

ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an inquiry
CREATE POLICY "Anyone can submit partnership inquiries"
ON public.partnership_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only service_role can read (no public SELECT policy => locked down)
