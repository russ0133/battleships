import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
const NOT_HIT = 0;
const CORRECT_HIT = 1;
const INVALID_HIT = 2;

test("Correctly identifies ship (length 1) hit.", () => {
  let game = new Gameboard();
  game.createShip(3);
  expect(game.receiveAttack(3)).toBe(CORRECT_HIT);
});

test("Falsely identifies ship (length 1) hit.", () => {
  let game = new Gameboard();
  game.createShip(3);
  expect(game.receiveAttack(4)).toBe(INVALID_HIT);
});

test("Correctly identifies ship (length 2) hit.", () => {
  let game = new Gameboard();
  game.createShip(3, 2);
  expect(game.receiveAttack(4)).toBe(CORRECT_HIT);
});

test("Falsely identifies ship (length 2) hit.", () => {
  let game = new Gameboard();
  game.createShip(3, 2);
  expect(game.receiveAttack(5)).toBe(INVALID_HIT);
});

test("Correctly check if the game is Over", () => {
  let game = new Gameboard();
  expect(game.isGameOver()).toBe(true);
});

test("Falsely check if the game is Over", () => {
  let game = new Gameboard();
  game.createShip(3, 2);
  expect(game.isGameOver()).toBe(false);
});
