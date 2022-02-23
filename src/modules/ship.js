const NOT_HIT = 0;
const CORRECT_HIT = 1;
const INVALID_HIT = 2;
export default class Ship {
  constructor(x, y, length = 1, isSunk = false, isHit = []) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.isSunk = isSunk;
    this.isHit = isHit;
  }
  getLength() {
    return this.length;
  }
  isSunk() {
    for (let i = 0; i < this.length; i++) {
      if (this.isHit[i] == false) return false;
    }
    return true;
  }
  hit(position) {
    this.isHit[position] = true;
    return 1;
  }
}

function attackShip(ship, position) {
  return ship.hit(position);
}
