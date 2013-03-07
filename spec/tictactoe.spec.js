describe('TicTacToe', function () {
  beforeEach(function() {
    t = new TicTacToe;
  });

  describe('#findWinner', function() {
    it('determines if there is a winner', function() {

      // horizontals
      t.board = ['x','x','x',null,null,null,null,null,null];
      expect(t.findWinner('x')).toBeTruthy();
      t.board = [null,null,null,'x','x','x',null,null,null];
      expect(t.findWinner('x')).toBeTruthy();
      t.board = [null,null,null,null,null,null,'x','x','x'];
      expect(t.findWinner('x')).toBeTruthy();
      expect(t.findWinner('o')).toBeFalsy();

      // verticals
      t.board = ['o',null,null,'o',null,null,'o','x','x'];
      expect(t.findWinner('o')).toBeTruthy();
      t.board = [null,'o',null,null,'o',null,'x','o','x'];
      expect(t.findWinner('o')).toBeTruthy();
      t.board = [null,null,'o',null,null,'o','x','x','o'];
      expect(t.findWinner('o')).toBeTruthy();
      expect(t.findWinner('x')).toBeFalsy();

      // diagonals
      t.board = [null,null,'o',null,'o',null,'o','x','x'];
      expect(t.findWinner('o')).toBeTruthy();
      expect(t.findWinner('x')).toBeFalsy();
      t.board = ['x',null,null,null,'x',null,'o','o','x'];
      expect(t.findWinner('x')).toBeTruthy();
      expect(t.findWinner('o')).toBeFalsy();
    });
  });

  describe('#tryMove', function() {
    it('returns true and populates board if cell is null', function() {
      expect(t.tryMove('x', 0)).toBeTruthy();
      expect(t.board['0']).toEqual('x');
    });

    it('returns false when cell is already populated', function() {
      t.board[0] = 'x';
      expect(t.tryMove('x', 0)).toBeFalsy();
    });
  })
});