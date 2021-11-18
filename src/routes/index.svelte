<script lang="ts">
	import { game } from '$lib/stores';
	import SingleplayerMastermindGame from '$lib/classes/singeplayerMastermindGame';
	import GameBoard from '../components/gameBoard.svelte';
	import DifficultySlider from '../components/difficultySlider.svelte';
	import Instructions from '../components/instructions.svelte';
	import SvelteSeo from "svelte-seo";
	import SubmitButton from '../components/submitButton.svelte';
	import EmojiPicker from '../components/emojiPicker.svelte';

	function startGame() {
		let numberOfRows = 4 + difficulty;
		game.set(new SingleplayerMastermindGame(numberOfRows));
	}
	let difficulty = 0;
</script>

<SvelteSeo
	title="Mastermind"
	description="An advanced mastermind implementation written by Daneric & Marnix"
/>
{#if $game}
	<p>{JSON.stringify($game)}</p>
	<GameBoard />
	<label>Guess</label>
	<input placeholder="1,1,1,1" />
	<label>Difficulty</label>
	<SubmitButton />
	<EmojiPicker />
{:else}
	<Instructions />
	<DifficultySlider bind:value={difficulty} />
	<button on:click={startGame}>Start Game</button>
{/if}
