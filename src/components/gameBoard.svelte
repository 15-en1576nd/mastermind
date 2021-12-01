<script lang="ts">
	import { game } from '$lib/stores';
	import BoardRow from './boardRow.svelte';
</script>

{#each $game.rows as _, i}
	<!-- We disable the boardrow from edits if the row is not reached yet -->
	<BoardRow rowIndex={i} disabled={$game.maxGuesses - $game.guessCount - 1 !== i} />
{/each}
