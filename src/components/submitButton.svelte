<script lang="ts">
	import { game } from '$lib/stores';
import Button from './button.svelte';

	$: currentIndex = $game.maxGuesses - $game.guessCount - 1;
</script>

<Button
	class="bg-blue-500 min-w-sm my-2"
	on:click={() => {
		if ($game.gameOver) return;
		$game.guess($game.rows[currentIndex].code);
		game.set($game);
	}}>Guess</Button>
