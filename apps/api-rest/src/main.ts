import express from 'express';
import session from 'express-session';

import { authRouter } from '@generalist/api-rest/auth';
import { env } from '@generalist/api-rest/env';

const host = env.HOST ?? 'localhost';
const port = env.PORT ? Number(env.PORT) : 3000;
const app = express();

app.use(express.json());
app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/', authRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
