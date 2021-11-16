import type { Code } from '$lib/types/code';

export default class MastermindGame {
	code: Code;
	guesses: Code[];
	guessCount: number;
	gameOver: boolean;
	maxGuesses: number;

	constructor(code: Code, maxGuesses: number) {
		this.code = code;
		this.guesses = [];
		this.guessCount = 0;
		this.gameOver = false;
		this.maxGuesses = maxGuesses;
	}

	checkGuess(guess) {
		if (this.gameOver) {
			throw new Error('Game is over');
		}

		let exact = 0;
		let near = 0;
		const code = this.code;
		for (let i = 0; i < 4; i++) {
			if (guess[i] === code[i]) {
				exact++;
			} else if (code.includes(guess[i])) {
				near++;
			}
		}

		if (exact === 4) {
			this.gameOver = true;
		}

		if (this.guessCount === this.maxGuesses) {
			this.gameOver = true;
		}

		return { exact, near };
	}
}
