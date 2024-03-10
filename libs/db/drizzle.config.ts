import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/lib/schema.ts',
  driver: 'pg',
  out: './drizzle',
  dbCredentials: {
    connectionString: 'generalist',
  },
  verbose: true,
  strict: true,
});
