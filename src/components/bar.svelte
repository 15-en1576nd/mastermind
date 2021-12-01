<script>
import { user } from "$lib/stores";

import Emoji from "./emoji.svelte";

import Login from "./login.svelte";
import User from "./user.svelte";

</script>
<div class="bg-gray-50 flex justify-between w-full">
  <Emoji emoji="😃" />
  {#if $user}
    <User user={$user} />
    {:else}
    <Login />
  {/if}
  
</div>

<style>
  div {
    min-height: 1.5rem;
  }
</style>