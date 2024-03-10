import { text, pgTable, varchar, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  email: varchar('email', { length: 50 }).notNull(),
});
