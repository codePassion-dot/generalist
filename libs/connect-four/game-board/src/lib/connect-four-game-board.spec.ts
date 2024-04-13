import { connectFourGameBoard } from './connect-four-game-board';

describe('connectFourGameBoard', () => {
  it('should work', () => {
    expect(connectFourGameBoard()).toEqual('connect-four-game-board');
  });
});
