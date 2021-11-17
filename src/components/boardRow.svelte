<script lang="ts">
	import emojiMap from '$lib/emojimap';
	import EmojiSlot from './emojiSlot.svelte';
	import Emoji from './emoji.svelte';
	import { game, selectedEmoji } from '$lib/stores';

	export let rowIndex: number;
	export let disabled: boolean;
</script>

<div style={`grid-template-columns: repeat(${$game.rows.length}, 1fr);`}>
	{#each $game.rows[rowIndex] as column, columnIndex}
		<button
			{disabled}
			on:click={() => {
				if (disabled) return;
				game.update((cgame) => {
					//@ts-ignore
					cgame.rows[rowIndex][columnIndex] = $selectedEmoji;
					return cgame;
				});
			}}
		>
			<EmojiSlot>
				{#if column !== 8}
					<Emoji emoji={emojiMap[column]} />
				{/if}
			</EmojiSlot>
		</button>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-gap: 0.5rem;
		max-width: min-content;
		margin-left: auto;
		margin-right: auto;
	}
</style>
