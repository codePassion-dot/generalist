import { relations } from 'drizzle-orm';
import { text, pgTable, varchar, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  email: varchar('email', { length: 50 }).notNull().unique(),
  image: text('image').default('https://avatar.iran.liara.run/public'),
});

export const usersRelations = relations(users, ({ many }) => ({
  federatedCredentials: many(federatedCredentials),
}));

export const federatedCredentials = pgTable('federated_credentials', {
  id: uuid('id').primaryKey(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  provider: varchar('provider', { length: 50 }).notNull(),
  subject: varchar('subject', { length: 50 }).notNull(),
});

export const federatedCredentialsRelations = relations(
  federatedCredentials,
  ({ one }) => ({
    credentialsOwner: one(users, {
      fields: [federatedCredentials.userId],
      references: [users.id],
    }),
  })
);
