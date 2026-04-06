import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE EXTENSION IF NOT EXISTS pg_trgm;
   CREATE INDEX IF NOT EXISTS blogs_status_created_at_idx ON blogs (_status, created_at DESC);
   CREATE INDEX IF NOT EXISTS services_status_order_idx ON services (_status, _order);
   CREATE INDEX IF NOT EXISTS research_papers_status_created_at_idx ON research_papers (_status, created_at DESC);
   CREATE INDEX IF NOT EXISTS blogs_title_trgm_idx ON blogs USING gin (title gin_trgm_ops);
   CREATE INDEX IF NOT EXISTS blogs_description_trgm_idx ON blogs USING gin (description gin_trgm_ops);
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS blogs_description_trgm_idx;
   DROP INDEX IF EXISTS blogs_title_trgm_idx;
   DROP INDEX IF EXISTS research_papers_status_created_at_idx;
   DROP INDEX IF EXISTS services_status_order_idx;
   DROP INDEX IF EXISTS blogs_status_created_at_idx;
  `)
}
