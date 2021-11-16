<script lang="ts">
	import type PlayableMastermindGame from '$lib/classes/playableMastermindGame';
	import SingleplayerMastermindGame from '$lib/classes/singeplayerMastermindGame';
	import type { Code } from '$lib/types/code';
	import DifficultySlider from '../components/difficultySlider.svelte';
	import Instructions from '../components/instructions.svelte';
	let game: PlayableMastermindGame;

	function startGame() {
		let numberOfRows = 4 + difficulty;
		game = new SingleplayerMastermindGame(numberOfRows);
	}
	let difficulty = 0;
	let guessText = '';
	$: guess = guessText.split(',').map(parseInt) as Code;
</script>

{#if game}
	<p>{JSON.stringify(game)}</p>
	<label>Guess</label>
	<input placeholder="1,1,1,1" />
	<label>Difficulty</label>
{:else}
	<Instructions />
	<DifficultySlider bind:value={difficulty} />
	<button on:click={startGame}>Start Game</button>
{/if}
