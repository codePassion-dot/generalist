/* eslint-disable */

import axios from 'axios';
import { env } from '@generalist/api-rest/env';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = env.HOST ?? 'localhost';
  const port = env.PORT ?? '3000';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
