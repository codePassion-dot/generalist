import express from 'express';
import session from 'express-session';

import { authRouter } from '@generalist/api-rest/auth';
import { env } from '@generalist/api-rest/env';

const host = env.HOST ?? 'localhost';
const port = env.PORT ? Number(env.PORT) : 3000;
const app = express();

const sessionOpts: session.SessionOptions = {
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false,
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sessionOpts.cookie.secure = true; // serve secure cookies
}

app.use(express.json());
app.use(session(sessionOpts));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/', authRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
