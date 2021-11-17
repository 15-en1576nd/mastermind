<script lang="ts">
  import { game } from "$lib/stores";
  import BoardRow from "./boardRow.svelte";
</script>

{#each $game.rows as _, i}
  <BoardRow
  rowIndex={i}
  disabled={($game.maxGuesses - $game.guessCount - 1) !== i }
  ></BoardRow>
{/each}