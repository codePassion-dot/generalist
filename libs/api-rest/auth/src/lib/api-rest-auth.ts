import express from 'express';

export const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.send({ message: 'Hello API Auth' });
});
