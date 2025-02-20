import { Player } from "../player";

describe("Player Class", () => {
  test("Player has no score at the beginning", () => {
    const player = new Player("Alice");
    expect(player.getScore()).toBe(0);
  });

  test("Score updates when player rolls", () => {
    const player = new Player("Alice");
    player.roll(5);
    player.roll(4);
    expect(player.getScore()).toBe(9);
  });

  test("Player rolling randomly still updates score", () => {
    const player = new Player("Alice");
    player.roll();
    expect(player.getScore()).toBeGreaterThanOrEqual(0);
  });

  test("Player can roll multiple times and score accumulates", () => {
    const player = new Player("Alice");
    player.roll(3);
    player.roll(6);
    player.roll(4);
    expect(player.getScore()).toBe(13);
  });

  test("Player gets correct bonus for a spare", () => {
    const player = new Player("Alice");
    player.roll(5);
    player.roll(5);
    player.roll(3);
    expect(player.getScore()).toBe(16);
  });

  test("Player gets correct bonus for a strike", () => {
    const player = new Player("Alice");
    player.roll(10);
    player.roll(4);
    player.roll(3);
    expect(player.getScore()).toBe(24);
  });

  test("Multiple strikes give correct bonuses", () => {
    const player = new Player("Alice");
    player.roll(10);
    player.roll(10);
    player.roll(5);
    player.roll(2);
    expect(player.getScore()).toBe(49);
  });

  test("Multiple strikes and spares give correct bonuses", () => {
    const player = new Player("Alice");

    // Strike (Frame 1)
    player.roll(10);

    // Spare (Frame 2: 6 + 4)
    player.roll(6);
    player.roll(4);

    // Normal Rolls (Frame 5)
    player.roll(3);
    player.roll(2);

    expect(player.getScore()).toBe(38);
  });
});
