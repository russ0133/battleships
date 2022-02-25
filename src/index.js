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
  gridItem.innerText = `col ${i}`;
  gridItem.classList.add("bg-red-500");
  grid.appendChild(gridItem);
  console.log("heya");
}
for (
  let i = 0;
  i < playerTwo.gameboard.boardX.length * playerTwo.gameboard.boardY.length;
  i++
) {
  let gridItem = document.createElement("div");
  gridItem.innerText = `row ${i}`;
  gridItem.classList.add("bg-violet-700");
  grid.appendChild(gridItem);
  console.log("heya");
}
