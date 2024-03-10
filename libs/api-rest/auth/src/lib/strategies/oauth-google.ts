import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import {
  createFederatedCredentials,
  createUser,
  findFederatedCredentailsByProviderAndSubject,
  findUserByEmail,
  findUserById,
} from '../data-access';
import crypto from 'crypto';

const oauthGoogle = new GoogleStrategy(
  {
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: 'http://localhost:3000/oauth2/redirect/google',
    scope: ['profile', 'email'],
    state: true,
  },
  async function verify(_accessToken, _refreshToken, profile, cb) {
    const credentials = await findFederatedCredentailsByProviderAndSubject({
      provider: 'https://accounts.google.com',
      subject: profile.id,
    });
    if (!credentials) {
      const user = await findUserByEmail(profile.emails[0].value);
      if (user) {
        return cb(new Error('User have another authentication method'));
      }
      const newUser = await createUser({
        id: crypto.randomUUID(),
        name: profile.displayName,
        email: profile.emails[0].value,
      });

      if (!newUser) {
        return cb(new Error('Error creating user'));
      }

      const newFederatedCredentials = createFederatedCredentials({
        id: crypto.randomUUID(),
        userId: newUser.id,
        provider: 'https://accounts.google.com',
        subject: profile.id,
      });

      if (!newFederatedCredentials) {
        return cb(new Error('Error creating federated credentials'));
      }
      return cb(null, newUser);
    } else {
      const user = await findUserById(credentials.userId);
      return cb(null, user);
    }
  }
);

export default oauthGoogle;
