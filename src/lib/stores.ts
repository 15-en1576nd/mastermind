import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type PlayableMastermindGame from './classes/playableMastermindGame';
import type { CodeDigit } from './types/code';
import type { User } from 'firebase/auth';

export const selectedEmoji: Writable<CodeDigit> = writable(1);
export const game: Writable<PlayableMastermindGame> = writable();
export const user: Writable<User> = writable();