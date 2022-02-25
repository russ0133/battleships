export default class Ship {
  constructor(length = 1, isSunk = false, isHit = []) {
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
