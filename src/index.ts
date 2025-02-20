import { Game } from "./game";

const game = new Game(["Alice", "Bob"]);

game.play();

console.log(game.getScores());
