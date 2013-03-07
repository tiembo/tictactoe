describe('TicTacToe', function () {
  describe('#findWinner', function() {
    it('determines if there is a winner', function() {
      var t = TicTacToe;

      // horizontal rows
      t.board = ['x','x','x',null,null,null,null,null,null];
      expect(t.findWinner('x')).toBeTruthy();
      t.board = [null,null,null,'x','x','x',null,null,null];
      expect(t.findWinner('x')).toBeTruthy();
      t.board = [null,null,null,null,null,null,'x','x','x'];
      expect(t.findWinner('x')).toBeTruthy();
      expect(t.findWinner('o')).toBeFalsy();

      // vertical rows
      t.board = ['o',null,null,'o',null,null,'o','x','x'];
      expect(t.findWinner('o')).toBeTruthy();
      t.board = [null,'o',null,null,'o',null,'x','o','x'];
      expect(t.findWinner('o')).toBeTruthy();
      t.board = [null,null,'o',null,null,'o','x','x','o'];
      expect(t.findWinner('o')).toBeTruthy();
      expect(t.findWinner('x')).toBeFalsy();

      // diagonal rows
      t.board = [null,null,'o',null,'o',null,'o','x','x'];
      expect(t.findWinner('o')).toBeTruthy();
      expect(t.findWinner('x')).toBeFalsy();
      t.board = ['x',null,null,null,'x',null,'o','o','x'];
      expect(t.findWinner('x')).toBeTruthy();
      expect(t.findWinner('o')).toBeFalsy();
    });
  });
});