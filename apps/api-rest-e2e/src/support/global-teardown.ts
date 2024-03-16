/* eslint-disable */

import path from 'path';
import { spawn, exec } from 'child_process';
import util from 'util';

module.exports = async function () {
  // Put clean up logic here (e.g. stopping services, docker-compose, etc.).
  // Hint: `globalThis` is shared between setup and teardown.
  try {
    await globalThis.__COMPOSE__.down({
      cwd: path.join(__dirname, '../../../../libs/db'),
      commandOptions: [['--volumes'], ['--remove-orphans'], ['-t', '1']],
      env: { UID: String(process.getuid()), GID: String(process.getgid()) },
      callback: (chunk: Buffer) => {
        console.log('job in progress: ', chunk.toString());
      },
    });
    console.log('Database is shutdown.');
    const execAsync = util.promisify(exec);
    const { stderr: stderrBackendStop, stdout: stdoutBackendStop } =
      await execAsync('docker stop api-rest', {
        cwd: path.join(__dirname, '../../../api-rest'),
      });
    console.log(`stdout: ${stdoutBackendStop}`);
    console.error(`stderr: ${stderrBackendStop}`);
    const { stderr: stderrBackendRemove, stdout: stdoutBackendRemove } =
      await execAsync('docker container rm api-rest', {
        cwd: path.join(__dirname, '../../../api-rest'),
      });
    console.log(`stdout: ${stdoutBackendRemove}`);
    console.error(`stderr: ${stderrBackendRemove}`);
  } catch (err) {
    console.log(
      'Something went wrong during docker compose shutdown:',
      err.message
    );
  }
  console.log(globalThis.__TEARDOWN_MESSAGE__);
};
