<script lang="ts">
	import Instructions from '../components/instructions.svelte';
	let started = false;
</script>

{#if started}
	<!-- Game Canvas and stuff here -->
{:else}
	<Instructions />
	<button>Start Game</button>
{/if}
