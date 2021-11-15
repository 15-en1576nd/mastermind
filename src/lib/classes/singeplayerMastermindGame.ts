import type { Code, CodeDigit } from '$lib/types/code';
import MastermindGame from './mastermindGame';
import type PlayableMastermindGame from './playableMastermindGame';

export default class SingleplayerMastermindGame
	extends MastermindGame
	implements PlayableMastermindGame
{
	constructor(codeLength: number) {
		const code: Code = [];
		for (let i = 0; i < codeLength; i++) {
			code.push(Math.floor(Math.random() * 8) as CodeDigit);
		}
		super(code, 10);
	}

	guess(guess: Code): void {
		this.guessCount++;
		const { exact, near } = this.checkGuess(guess);
		this.guesses.push(guess);
		if (exact === 4) {
			this.gameOver = true;
		}
	}
}
