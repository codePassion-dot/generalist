import { Resend } from 'resend';
import { env } from '@generalist/api-rest/env';

const resend = new Resend(env.RESEND_API_KEY);

type Email = {
  to: string;
  subject?: string;
  text?: string;
  html?: string;
};

export const sendEmail = async ({
  to,
  html,
  text = 'Hello! this is an email from the generalist',
  subject = '(no subject)',
}: Email) => {
  const msg = {
    to,
    from: env.EMAIL ?? 'jacobo1aristizabal@gmail.com',
    subject,
    ...(html ? { html } : { text }),
  };
  const resendResponse = await resend.emails.send(msg);
  if (resendResponse.error) {
    throw new Error('Error sending email');
  }
  return 'Email sent!';
};
