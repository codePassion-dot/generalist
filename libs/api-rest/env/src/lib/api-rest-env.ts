import { z } from 'zod';

const envVariables = z.object({
  MAGIC_LINK_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
  EMAIL: z.string().email(),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_USER: z.string(),
  PGDATA: z.string(),
  HOST: z.string().optional(),
  PORT: z.string().optional(),
});

const createEnv = () => {
  const validationResponse = envVariables.safeParse(process.env);
  if (validationResponse.success === false) {
    const { fieldErrors } = validationResponse.error.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) =>
        errors ? `${field}: ${errors.join(', ')}` : field
      )
      .join('\n  ');
    process.exitCode = 1;
    throw new Error(`Missing environment variables:\n  ${errorMessage}`);
  } else {
    return validationResponse.data;
  }
};

export const env = createEnv();

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
