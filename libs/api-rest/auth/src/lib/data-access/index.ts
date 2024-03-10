import { db, federatedCredentials } from '@generalist/db';
import { users } from '@generalist/db';
import crypto from 'crypto';

export const findByEmailOrCreate = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
  if (user) {
    return user;
  }
  const newUser = await db
    .insert(users)
    .values({ id: crypto.randomUUID(), email, name })
    .returning();

  if (newUser.length > 0) {
    return newUser[0];
  }
  throw new Error('Error creating user');
};

export const findUserByEmail = async (email: string) => {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });
  return user;
};

export const findUserById = async (id: string) => {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, id),
  });
  return user;
};

type NewFederatedCredentials = typeof federatedCredentials.$inferInsert;

export const createFederatedCredentials = async ({
  id,
  userId,
  provider,
  subject,
}: NewFederatedCredentials) => {
  const newFederatedCredentials = await db
    .insert(federatedCredentials)
    .values({ id, userId, provider, subject })
    .returning();

  if (newFederatedCredentials.length > 0) {
    return newFederatedCredentials[0];
  }
  return undefined;
};

type NewUser = typeof users.$inferInsert;

export const createUser = async ({ id, name, email, image }: NewUser) => {
  const newUser = await db
    .insert(users)
    .values({ id, name, email, image })
    .returning();
  if (newUser.length > 0) {
    return newUser[0];
  }
  return undefined;
};

export const findFederatedCredentailsByProviderAndSubject = async ({
  provider,
  subject,
}: {
  provider: string;
  subject: string;
}) => {
  const credentials = await db.query.federatedCredentials.findFirst({
    where: (federatedCredentials, { eq }) =>
      eq(federatedCredentials.provider, provider) &&
      eq(federatedCredentials.subject, subject),
  });
  return credentials;
};
