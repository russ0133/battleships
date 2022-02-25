import Gameboard from "../modules/gameboard";
import Player from "../modules/player";

const NOT_HIT = 0;
const CORRECT_HIT = 1;
const INVALID_HIT = 2;

test("Correctly identifies ship (length 1) hit.", () => {
  let player = new Player();
  let game = player.gameboard;
  game.createShip(3);
  expect(game.receiveAttack(3)).toBe(CORRECT_HIT);
});

test("Falsely identifies ship (length 1) hit.", () => {
  let player = new Player();
  let game = player.gameboard;
  game.createShip(3);
  expect(game.receiveAttack(4)).toBe(INVALID_HIT);
});

test("Correctly identifies ship (length 2) hit.", () => {
  let player = new Player();
  let game = player.gameboard;
  game.createShip(3, 2);
  expect(game.receiveAttack(4)).toBe(CORRECT_HIT);
});

test("Falsely identifies ship (length 2) hit.", () => {
  let player = new Player();
  let game = player.gameboard;
  game.createShip(3, 2);
  expect(game.receiveAttack(5)).toBe(INVALID_HIT);
});

test("Correctly check if the game is Over", () => {
  let player = new Player();
  let game = player.gameboard;
  expect(game.isGameOver()).toBe(true);
});

test("Falsely check if the game is Over", () => {
  let player = new Player();
  let game = player.gameboard;
  game.createShip(3, 2);
  expect(game.isGameOver()).toBe(false);
});

it("AI can correctly attack another player gameboard", () => {
  let playerHuman = new Player();
  let playerComputer = new Player(false);
  playerHuman.gameboard.createShip(3, 2);
  expect(playerComputer.computerAttackPlayer(playerHuman, 3)).toBe(CORRECT_HIT);
});

test("AI can incorrectly attack another player gameboard", () => {
  let playerHuman = new Player();
  let playerComputer = new Player(false);
  playerHuman.gameboard.createShip(5, 2);
  expect(playerComputer.computerAttackPlayer(playerHuman, 3)).toBe(INVALID_HIT);
});

test("AI can't target places that have already been hit", () => {
  let playerHuman = new Player();
  let playerComputer = new Player(false);
  playerHuman.gameboard.createShip(5, 2);
  playerHuman.gameboard.receiveAttack(7);
  expect(playerComputer.computerAttackPlayer(playerHuman, 7)).toBe(99);
});
