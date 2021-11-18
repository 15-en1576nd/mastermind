<script lang='ts'>
import { game } from "$lib/stores";


    $:currentIndex = $game.maxGuesses - $game.guessCount - 1;
</script>

<button on:click={
    () => {
        $game.guess($game.rows[currentIndex].code);
        game.set($game)
    }
}>Guess</button>