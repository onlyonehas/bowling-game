# Bowling Game Scorer

A simple Bowling Game Scorer that calculates the score based on standard bowling rules, including strikes and spares.

## How It Works

- Players roll up to **10 frames** per game.
- **Strikes (X):** Bonus from the next **2** rolls.
- **Spares (/):** Bonus from the next **1** roll.
- The **10th frame** allows up to **3 rolls** if a strike or spare is achieved.

## Code Improvements

- Add a Frame class to manage frames better.
- Create a Score class for better organization.
- Add CLI animations to make it more interactive.
- Allow user input for manual gameplay.
- Let players end the game anytime.
- Update scores live after each roll.
- Show clear prompts like game start and next player.
- Display rankings and determine winners.

## Repo Improvements

- Use Husky hooks for pre-commit checks.
- Add Prettier for consistent formatting.
- Use ESLint to catch errors and enforce best practices.
- Set up GitHub Actions for automated testing.
- Add Winston logging for better debugging.
