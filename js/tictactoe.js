var TicTacToe = {
  board: [null,null,null,null,null,null,null,null,null],
  findWinner: function(player) {
    return (this.board['0'] === player) && (this.board['1'] === player) && (this.board['2'] === player) ||
           (this.board['3'] === player) && (this.board['4'] === player) && (this.board['5'] === player) ||
           (this.board['6'] === player) && (this.board['7'] === player) && (this.board['8'] === player) ||
           (this.board['0'] === player) && (this.board['3'] === player) && (this.board['6'] === player) ||
           (this.board['1'] === player) && (this.board['4'] === player) && (this.board['7'] === player) ||
           (this.board['2'] === player) && (this.board['5'] === player) && (this.board['8'] === player) ||
           (this.board['0'] === player) && (this.board['4'] === player) && (this.board['8'] === player) ||
           (this.board['2'] === player) && (this.board['4'] === player) && (this.board['6'] === player);
  }
};