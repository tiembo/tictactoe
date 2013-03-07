function TicTacToe() {}

TicTacToe.prototype.board = [null,null,null,null,null,null,null,null,null];

TicTacToe.prototype.findWinner = function(player) {

          // horizontals
  return (this.board['0'] === player) && (this.board['1'] === player) && (this.board['2'] === player) ||
         (this.board['3'] === player) && (this.board['4'] === player) && (this.board['5'] === player) ||
         (this.board['6'] === player) && (this.board['7'] === player) && (this.board['8'] === player) ||

         // verticals
         (this.board['0'] === player) && (this.board['3'] === player) && (this.board['6'] === player) ||
         (this.board['1'] === player) && (this.board['4'] === player) && (this.board['7'] === player) ||
         (this.board['2'] === player) && (this.board['5'] === player) && (this.board['8'] === player) ||

         // diagonals
         (this.board['0'] === player) && (this.board['4'] === player) && (this.board['8'] === player) ||
         (this.board['2'] === player) && (this.board['4'] === player) && (this.board['6'] === player);
};

TicTacToe.prototype.tryMove = function(player, position) {
  console.log(this.board);

  if(this.board[position] === null) {
    this.board[position] = player;
    return true;
  } else {
    return false;
  }
};