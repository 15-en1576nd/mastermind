<script lang="ts">
	import { game } from '$lib/stores';
	import SingleplayerMastermindGame from '$lib/classes/singeplayerMastermindGame';
	import GameBoard from '../components/gameBoard.svelte';
	import DifficultyPicker from '../components/difficultyPicker.svelte';
	import Instructions from '../components/instructions.svelte';
	import SvelteSeo from 'svelte-seo';
	import SubmitButton from '../components/submitButton.svelte';
	import EmojiPicker from '../components/emojiPicker.svelte';
	import Button from '../components/button.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	function startGame() {
		let numberOfRows = 4 + difficulty;
		game.set(new SingleplayerMastermindGame(numberOfRows));
	}
	let difficulty = 0;
</script>

<SvelteSeo
	title="MojiMind"
	description="An advanced mastermind implementation written by Daneric & Marnix"
/>
{#if $game}
	<div>
		<div class="bg-white mt-2 rounded-md mx-auto py-3 px-5 max-w-min">
			<GameBoard />
			<EmojiPicker />
		</div>
		<div class="mx-auto max-w-min">
			<SubmitButton />
		</div>
	</div>
{:else}
	<div class="mx-auto max-w-max my-5">
		<h1 class="text-6xl text-gray-800">MojiMind</h1>
	</div>
	<div class="mx-auto max-w-max my-5">
		<Button class="bg-blue-500 min-w-sm" on:click={startGame}
			>PLAY {difficulty === 0 ? 'EASY' : difficulty === 1 ? 'MEDIUM' : 'HARD'}</Button
		>
	</div>
	<div class="max-w-sm mx-auto my-5">
		<DifficultyPicker bind:value={difficulty} />
	</div>
	<div class="bg-white mt-2 rounded-md mx-auto py-3 px-5 w-full md:max-w-xl shadow-xl">
		<h2 class="text-2xl text-gray-800 text-center w-full">Instructions</h2>
		<Instructions />
	</div>
{/if}
