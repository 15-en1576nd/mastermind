<script>
import { user } from "$lib/stores";

import Emoji from "./emoji.svelte";

import Login from "./login.svelte";

</script>
<div class="bg-gray-50 flex justify-between w-full">
  <Emoji emoji="😃" />
  {#if $user}
    <div class="text-gray-700 text-xl font-bold flex flex-row">
      {$user.displayName}
      <img class="h-8 w-8 rounded-full" alt="user profile" src="{$user.photoURL}" />
    </div>
    {:else}
    <Login />
  {/if}
  
</div>

<style>
  div {
    min-height: 1.5rem;
  }
</style>