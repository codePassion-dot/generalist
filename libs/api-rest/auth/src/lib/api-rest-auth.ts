import express from 'express';
import passport from 'passport';
import magicLogin from './strategies/magic-link';
import { findUserById } from './data-access';
import '@generalist/api-rest/shared-types';

passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    cb(null, { id: user.id, email: user.email, name: user.name });
  });
});

passport.deserializeUser(async (id: string, done) => {
  const user = await findUserById(id);
  done(user ? null : new Error('User not found'), user);
});

passport.use(magicLogin);

export const authRouter = express.Router();

authRouter.get(
  '/login/email/verify',
  passport.authenticate('magiclogin', { successRedirect: '/' })
);

authRouter.post('/login/email', magicLogin.send);
