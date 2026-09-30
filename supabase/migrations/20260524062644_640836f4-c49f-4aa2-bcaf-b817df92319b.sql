-- Public buckets serve individual files via the public CDN endpoint without
-- going through RLS. Removing the broad SELECT policy prevents API clients
-- from listing the bucket contents while keeping direct file URLs accessible.
DROP POLICY IF EXISTS "Public read vavitaphoto" ON storage.objects;