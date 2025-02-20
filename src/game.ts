import { Player } from "./player";

export class Game {
  players: Player[];
  currentFrame: number = 1;

  constructor(playerNames: string[]) {
    this.players = playerNames.map(name => new Player(name));
  }

  play() {
    while (this.currentFrame <= 10) {
      this.playFrame();
    }
  }

  playFrame(): void {
    for (const player of this.players) {
      player.roll();
      if (player.rolls[player.rolls.length - 1] < 10) {
        player.roll();
      }
    }
    this.currentFrame++;
  }

  getScores(): { name: string; score: number }[] {
    return this.players.map(player => ({ name: player.name, score: player.getScore() }));
  }
}
