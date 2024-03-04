import { apiRestAuth } from './api-rest-auth';

describe('apiRestAuth', () => {
  it('should work', () => {
    expect(apiRestAuth()).toEqual('api-rest-auth');
  });
});
