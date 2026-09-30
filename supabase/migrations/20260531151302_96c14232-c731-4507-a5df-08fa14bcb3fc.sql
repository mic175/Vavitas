
-- Restrict storage.objects on 'vavitaphoto' bucket: public read, no client writes.
CREATE POLICY "Public read vavitaphoto"
ON storage.objects FOR SELECT
USING (bucket_id = 'vavitaphoto');
