import Hint from '$lib/enums/hint';
import type { Code, CodeDigit } from '$lib/types/code';
import type Row from '$lib/types/row';

// Each game is an instance of this class
export default class MastermindGame {
	code: Code;
	guesses: Code[];
	rows: Row[];
	guessCount: number;
	gameOver: boolean;
	maxGuesses: number;

	constructor(gameOrHumberOfRows: MastermindGame | number) {
		const game = gameOrHumberOfRows as MastermindGame;
		const numberOfRows = gameOrHumberOfRows as number;

		if (typeof game !== 'number') {
			this.code = game.code;
			this.guesses = game.guesses;
			this.rows = game.rows;
			this.guessCount = game.guessCount;
			this.gameOver = game.gameOver;
			this.maxGuesses = game.maxGuesses;
			return;
		}
		this.code = [];
		this.guesses = [];
		this.rows = [];
		this.guessCount = 0;
		this.gameOver = false;
		this.maxGuesses = 12;

		// Generate a random code of specified length
		for (let i = 0; i < numberOfRows; i++) {
			this.code.push(Math.floor(Math.random() * 8) as CodeDigit);
		}

		const emptyRow: Row = {
			code: this.code.map(() => 8),
			hints: this.code.map(() => Hint.EMPTY)
		};

		for (let i = 0; i < this.maxGuesses; i++) {
			this.rows.push({ code: [...emptyRow.code], hints: [...emptyRow.hints] });
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
			this.rows[rowIndex].hints[i] = Hint.EXACT;
		}
		for (let i = exact; i < exact + near; i++) {
			this.rows[rowIndex].hints[i] = Hint.NEAR;
		}

		if (exact === this.code.length) {
			this.gameOver = true;
		}

		this.guessCount++;

		if (this.guessCount === this.maxGuesses) {
			this.gameOver = true;
		}

		this.guesses.push(guess);
	}
}
