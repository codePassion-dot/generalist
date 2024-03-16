import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';
import { config } from 'dotenv';
import { resolve } from 'path';
import { env } from '@generalist/api-rest/env';

config({ path: resolve('apps/api-rest/.env') });

export const client = new Client({
  host: env.DB_HOST || '127.0.0.1',
  port: env.DB_PORT ? Number(env.DB_PORT) : 5432,
  user: env.DB_USER || 'example',
  password: env.DB_PASSWORD || 'example',
  database: env.DB_NAME || 'example',
});

(async () => {
  await client.connect();
})();

export const db = drizzle(client, { schema: { ...schema } });
