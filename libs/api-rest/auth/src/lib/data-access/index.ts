import { db } from '@generalist/db';
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

export const findUserById = async (id: string) => {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, id),
  });
  if (user) {
    return user;
  }
  return null;
};
