-- Public read for the vavitaphoto bucket; lock writes to service role only.
-- Note: storage.objects already has RLS enabled by Supabase.

CREATE POLICY "Public read vavitaphoto"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'vavitaphoto');

-- No INSERT/UPDATE/DELETE policies are added for anon or authenticated roles.
-- This means client-side uploads/edits/deletes are blocked. Service role
-- (used by admin tooling / edge functions) bypasses RLS and can still manage files.