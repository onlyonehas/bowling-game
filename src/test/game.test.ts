import { Game } from "../game";

describe("Game Class", () => {
  test("Game initialises with players names", () => {
    const game = new Game(["Alice", "Bob"]);
    expect(game.getScores()).toEqual([
      { name: "Alice", score: 0 },
      { name: "Bob", score: 0 }
    ]);
  });

  test("Game can plays through all 10 frames", () => {
    const game = new Game(["Alice"]);
    game.play();
    expect(game.currentFrame).toBe(11);
  });

  test("Game updates scores as players roll", () => {
    const game = new Game(["Alice"]);
    game.play();
    expect(game.getScores()[0].score).toBeGreaterThan(0);
  });

  test("Game can handle multiple players rolling", () => {
    const game = new Game(["Alice", "Bob"]);
    game.play();
    const scores = game.getScores();
    expect(scores[0].score).toBeGreaterThanOrEqual(0);
    expect(scores[1].score).toBeGreaterThanOrEqual(0);
  });
});
