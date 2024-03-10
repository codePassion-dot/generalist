import express from 'express';
import session from 'express-session';

import { authRouter } from '@generalist/api-rest/auth';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();

app.use(express.json());
app.use(session({ secret: 'my-secret' }));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/', authRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
