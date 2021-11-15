import type { Code } from '$lib/types/code';
import type MastermindGame from './mastermindGame';

export default interface PlayableMastermindGame extends MastermindGame {
	guess(guess: Code): void;
}
