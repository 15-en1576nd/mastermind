<script lang="ts">
import Ball from "$lib/enums/ball";

  // 0 is nothing, 1 is exact, 2 is near
  export let balls: number[]
</script>

<div class="grid grid-cols-2 grid-rows-2 border-2 border-gray-200 min-w-max mx-1 p-0.5 h-6">
  {#each balls as ball}
    <div class={
      "w-0 h-0 p-1 m-0 inline " + (
      ball === Ball.EMPTY ? 'bg-gray-200' :
      ball === Ball.EXACT ? 'bg-green-400' :
      'bg-red-400'
      )}></div> 
  {/each}
</div>