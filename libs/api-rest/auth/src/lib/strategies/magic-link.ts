import { sendEmail } from '@generalist/mailer';
import MagicLoginStrategy from 'passport-magic-login';
import { findByEmailOrCreate } from '../data-access';

const magicLogin = new MagicLoginStrategy({
  // Used to encrypt the authentication token. Needs to be long, unique and (duh) secret.
  secret: process.env.MAGIC_LINK_SECRET,

  // The authentication callback URL
  callbackUrl: '/login/email/verify',

  // Called with the generated magic link so you can send it to the user
  // "destination" is what you POST-ed from the client
  // "href" is your confirmUrl with the confirmation token,
  // for example "/login/email/verify?token=<longtoken>"
  sendMagicLink: async (destination, href) => {
    await sendEmail({
      to: destination,
      text: `Click this link to finish logging in: http://localhost:3000${href}`,
    });
  },

  // Once the user clicks on the magic link and verifies their login attempt,
  // you have to match their email to a user record in the database.
  // If it doesn't exist yet they are trying to sign up so you have to create a new one.
  // "payload" contains { "destination": "email" }
  // In standard passport fashion, call callback with the error as the first argument (if there was one)
  // and the user data as the second argument!
  verify: (payload, callback) => {
    // Get or create a user with the provided email from the database
    findByEmailOrCreate({ email: payload.destination, name: payload.name })
      .then((user) => {
        callback(null, user);
      })
      .catch((err: Error) => {
        callback(err);
      });
  },

  // Optional: options passed to the jwt.sign call (https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)
  jwtOptions: {
    expiresIn: '2 days',
  },
});
export default magicLogin;
