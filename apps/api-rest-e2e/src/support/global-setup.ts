import { v2 as compose } from 'docker-compose';
import * as path from 'path';
import { spawn, exec } from 'child_process';
import util from 'util';
/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;
var __COMPOSE__: any;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');
  globalThis.__COMPOSE__ = compose;

  const execAsync = util.promisify(exec);
  const buildBackend = () => {
    return new Promise((resolve, reject) => {
      const dockerBuild = spawn('nx', ['docker-build', 'api-rest'], {
        cwd: path.join(__dirname, '../../../../'),
      });
      dockerBuild.stdout.on('data', (data) => {
        process.stdout.write(`${data}\n`);
      });
      dockerBuild.stderr.on('data', (data) => {
        process.stderr.write(`${data}\n`);
      });
      dockerBuild.on('close', (code) => {
        resolve(`Docker build process exited with code ${code}`);
      });
      dockerBuild.on('error', (err) => {
        reject(`Failed to build docker image, ${err}`);
      });
    });
  };

  const startBackend = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { stderr, stdout } = await execAsync(
          'docker run --net host --env-file ./.env --name api-rest -d -t api-rest',
          {
            cwd: path.join(__dirname, '../../../api-rest'),
          }
        );
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        // NOTE: This is a workaround to give the container time to boot up.
        setTimeout(resolve, 2000);
      } catch (error) {
        reject(error);
      }
    });
  };

  try {
    await globalThis.__COMPOSE__.upAll({
      cwd: path.join(__dirname, '../../../../libs/db'),
      env: { UID: String(process.getuid()), GID: String(process.getgid()) },
      callback: (chunk: Buffer) => {
        console.log('job in progress: ', chunk.toString());
      },
    });
    const buildBackendResponse = await buildBackend();
    console.log(buildBackendResponse);
    await startBackend();
  } catch (err) {
    console.log(
      'Something went wrong during docker compose boot-up:',
      err.message
    );
  }
  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
