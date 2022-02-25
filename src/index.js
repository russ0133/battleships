import "./style.css";
import Ship from "./modules/ship";
import Gameboard from "./modules/gameboard";
import Player from "./modules/player";

const playerOne = new Player();
const playerTwo = new Player(false);

const body = document.querySelector("body");
const grid = document.querySelector("#grid-master");

for (let i = 0; i < playerTwo.gameboard.boardX.length; i++) {
  const gridItem = document.createElement("div");
  gridItem.innerText = `Element ${i}`;
  grid.appendChild(gridItem);
  console.log("heya");
}
