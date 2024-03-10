import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve('apps/api-rest/.env') });

export const client = new Client({
  host: process.env['DB_HOST'] || '127.0.0.1',
  port: process.env['DB_PORT'] ? Number(process.env['DB_PORT']) : 5432,
  user: process.env['DB_USER'] || 'example',
  password: process.env['DB_PASSWORD'] || 'example',
  database: process.env['DB_NAME'] || 'example',
});

(async () => {
  await client.connect();
})();

export const db = drizzle(client, { schema: { ...schema } });
