import Ball from '$lib/enums/ball';
import type { Code } from '$lib/types/code';
import type Row from '$lib/types/row';

export default class MastermindGame {
	code: Code;
	guesses: Code[];
	rows: Row[];
	guessCount: number;
	gameOver: boolean;
	maxGuesses: number;

	constructor(code: Code, maxGuesses: number) {
		this.code = code;
		this.guesses = [];
		this.rows = [];
		this.guessCount = 0;
		this.gameOver = false;
		this.maxGuesses = maxGuesses;

		const emptyRow: Row = {
			code: code.map(() => 8),
			balls: code.map(() => Ball.EMPTY)
		};
		for (let i = 0; i < maxGuesses; i++) {
			this.rows.push({ code: [...emptyRow.code], balls: [...emptyRow.balls] });
		}
	}

	guess(guess: Code) {
		if (this.gameOver) {
			throw new Error('Game is over');
		}

		let exact = 0;
		let near = 0;
		for (let i = 0; i < guess.length; i++) {
			if (guess[i] === this.code[i]) {
				exact++;
			} else if (this.code.includes(guess[i])) {
				near++;
			}
		}

		const rowIndex = this.maxGuesses - this.guessCount - 1;

		for (let i = 0; i < exact; i++) {
			this.rows[rowIndex].balls[i] = Ball.EXACT;
		}
		for (let i = exact; i < exact + near; i++) {
			this.rows[rowIndex].balls[i] = Ball.NEAR;
		}

		if (exact === this.code.length) {
			this.gameOver = true;
		}

		if (this.guessCount === this.maxGuesses) {
			this.gameOver = true;
		}

		this.guessCount++;
		this.guesses.push(guess);
	}
}
