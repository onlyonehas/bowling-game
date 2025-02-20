export class Player {
  name: string;
  rolls: number[] = [];
  private score = 0;

  constructor(name: string) {
    this.name = name;
  }

  roll(pins?: number): number {
    const knockedPins = pins ?? Math.floor(Math.random() * 11);
    this.rolls.push(knockedPins);
    this.calculateScore();
    return knockedPins;
  }

  private calculateScore(): void {
    this.score = 0;
    let frameIndex = 0;

    for (let i = 0; i < this.rolls.length; i++) {
      this.score += this.rolls[i];

      // Strike bonus: Add next two rolls
      if (frameIndex > 0 && this.rolls[frameIndex - 1] === 10) {
        this.score += this.rolls[i];
        if (i + 1 < this.rolls.length) this.score += this.rolls[i + 1]; // Add next roll too
      }

      // Spare bonus: Add next roll
      if (frameIndex > 1 && this.rolls[frameIndex - 2] + this.rolls[frameIndex - 1] === 10) {
        this.score += this.rolls[i];
      }

      frameIndex++;
    }
  }

  getScore(): number {
    return this.score;
  }
}
