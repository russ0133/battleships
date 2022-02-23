import Gameboard from "./gameboard";
const NOT_HIT = 0;
const CORRECT_HIT = 1;
const INVALID_HIT = 2;

export default class Player {
  constructor(isHuman = true) {
    this.isHuman = isHuman;
    this.gameboard = new Gameboard();
  }
  computerAttackPlayer(targetPlayer, forcex) {
    if (this.isHuman)
      throw new Error("Error: This function can only be used by Computers.");

    let random = getRandomIntInclusive(0, targetPlayer.gameboard.boardX.length);
    let actualX = forcex || random;
    if (
      targetPlayer.gameboard.getHitStatus(forcex) == CORRECT_HIT ||
      targetPlayer.gameboard.getHitStatus(forcex) == INVALID_HIT
    ) {
      this.computerAttackPlayer(targetPlayer, random);
      return 99;
    }
    return targetPlayer.gameboard.receiveAttack(actualX);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
