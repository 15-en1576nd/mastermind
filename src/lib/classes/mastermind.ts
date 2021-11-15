import type { Code } from '$lib/types/code';

export default class Mastermind {
	code: Code;
	guesses: Code[];
	guessCount: number;
	gameOver: boolean;
	maxGuesses: number;

	constructor() {
		this.code = this.generateCode();
		this.guesses = [];
		this.guessCount = 0;
		this.gameOver = false;
		this.maxGuesses = 10;
	}

	generateCode(): Code {
		const code = [];
		for (let i = 0; i < 4; i++) {
			code.push(Math.floor(Math.random() * 6));
		}
		return code;
	}

	guess(guess) {
		this.guessCount++;
		const result = this.checkGuess(guess);
		this.guesses.push(guess);
		if (result.exact === 4) {
			this.gameOver = true;
		}
		return result;
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
