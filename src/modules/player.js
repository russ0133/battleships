import Gameboard from "./gameboard";
const NOT_HIT = 0;
const VALID_HIT = 1;
const INVALID_HIT = 2;

export default class Player {
  constructor(isHuman = true) {
    this.isHuman = isHuman;
    this.gameboard = new Gameboard();
  }
  computerAttackPlayer(targetPlayer, forcex) {
    if (this.isHuman)
      throw new Error("Error: This function can only be used by Computers.");

    let random = getRandomInt(0, targetPlayer.gameboard.boardX.length);
    let hitStatus = targetPlayer.gameboard.getHitStatus(forcex);
    let actualX = forcex || random;

    if (hitStatus == VALID_HIT || hitStatus == INVALID_HIT) {
      this.computerAttackPlayer(targetPlayer, random);
      return 99;
    }
    return targetPlayer.gameboard.receiveAttack(actualX);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
