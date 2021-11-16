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
		return { exact, near };
	}
}
