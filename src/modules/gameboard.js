import Ship from "./ship";
const NOT_HIT = 0;
const VALID_HIT = 1;
const INVALID_HIT = 2;

// TODO: add 'orientation' parameter so ships can be created in a vertical orientation. check for hits etc.
export default class Gameboard {
  constructor(boardY = []) {
    this.boardX = Array(12).fill(NOT_HIT);
    this.boardY = boardY;
  }
  createShip(x, length) {
    let createdShip = new Ship(length);
    let board = this.boardX;
    for (let i = 0; i < createdShip.length; i++) {
      board[x + i] = createdShip;
    }
    return createdShip;
  }
  receiveAttack(x) {
    if (typeof this.boardX[x] == "object") {
      this.boardX[x] = VALID_HIT;
      return VALID_HIT;
    } else {
      this.boardX[x] = INVALID_HIT;
      return INVALID_HIT;
    }
  }
  getHitStatus(x) {
    return this.boardX[x];
  }
  isGameOver() {
    let isOver = true;
    for (let i = 0; i < this.boardX.length; i++) {
      if (typeof this.boardX[i] === "object") return (isOver = false);
    }
    for (let i = 0; i < this.boardY.length; i++) {
      if (typeof this.boardY[i] === "object") return (isOver = false);
    }
    return isOver;
  }
}
