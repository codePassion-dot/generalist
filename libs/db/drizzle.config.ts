import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: 'libs/db/src/lib/schema.ts',
  driver: 'pg',
  out: 'libs/db/drizzle',
  dbCredentials: {
    connectionString: 'generalist',
  },
  verbose: true,
  strict: true,
});
