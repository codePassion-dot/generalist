import { v2 as compose } from 'docker-compose';
import * as path from 'path';

/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;
var __COMPOSE__: any;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');
  globalThis.__COMPOSE__ = compose;

  try {
    await globalThis.__COMPOSE__.upAll({
      cwd: path.join(__dirname, '../../../../libs/db'),
      env: { UID: String(process.getuid()), GID: String(process.getgid()) },
      commandOptions: [['--force-recreate']],
      callback: (chunk: Buffer) => {
        console.log('job in progress: ', chunk.toString());
      },
    });
    console.log('Boot-up completed.');
  } catch (err) {
    console.log(
      'Something went wrong during docker compose boot-up:',
      err.message
    );
  }
  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
