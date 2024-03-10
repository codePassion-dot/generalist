import { Resend } from 'resend';

const resend = new Resend(process.env['RESEND_API_KEY']);

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
    from: process.env['EMAIL'] ?? 'jacobo1aristizabal@gmail.com',
    subject,
    ...(html ? { html } : { text }),
  };
  const resendResponse = await resend.emails.send(msg);
  if (resendResponse.error) {
    throw new Error('Error sending email');
  }
  return 'Email sent!';
};
