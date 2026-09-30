-- Explicitly deny SELECT/UPDATE/DELETE to anon and authenticated on partnership_inquiries.
-- Only service_role (used by the edge function) can read/manage rows.
CREATE POLICY "Deny select to anon and authenticated"
  ON public.partnership_inquiries
  AS RESTRICTIVE
  FOR SELECT
  TO anon, authenticated
  USING (false);

CREATE POLICY "Deny update to anon and authenticated"
  ON public.partnership_inquiries
  AS RESTRICTIVE
  FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Deny delete to anon and authenticated"
  ON public.partnership_inquiries
  AS RESTRICTIVE
  FOR DELETE
  TO anon, authenticated
  USING (false);