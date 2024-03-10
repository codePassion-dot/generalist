import express from 'express';
import passport from 'passport';
import magicLogin from './strategies/magic-link';
import { findUserById } from './data-access';
import '@generalist/api-rest/shared-types';
import oauthGoogle from './strategies/oauth-google';

passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    cb(null, { id: user.id, email: user.email, name: user.name });
  });
});

passport.deserializeUser(async (id: string, done) => {
  const user = await findUserById(id);
  done(user ? null : new Error('User not found'), user);
});

// NOTE: strategies registration
passport.use(magicLogin);
passport.use(oauthGoogle);

export const authRouter = express.Router();

// NOTE: magic links endpoints

authRouter.get(
  '/login/email/verify',
  passport.authenticate('magiclogin', { successRedirect: '/' })
);

authRouter.post('/login/email', magicLogin.send);

// NOTE: Google OAuth endpoints

authRouter.get('/login/google', passport.authenticate('google'));

authRouter.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    // failureRedirect: '/login', //TODO: actual frontend login page
    failureMessage: true,
  }),
  function (req, res) {
    console.log(req.session.messages);
    res.redirect('/');
  }
);
