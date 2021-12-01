<script lang="ts">
	import type { User } from 'firebase/auth';
	import { slide } from 'svelte/transition';

	export let user: User;

	let open = false;
</script>

<div class="flex flex-row p-0.5 cursor-pointer" on:click={() => (open = !open)}>
	<img class="h-8 w-8 rounded-full mr-1" alt="user profile" src={user.photoURL} />
	<div class="text-gray-900 font-semibold text-lg">{user.displayName}</div>

	{#if open}
		<div
			class="flex absolute top-8 bg-white shadow border-t-4 border-purple-700 rounded-md p-1"
			transition:slide|local
		>
			<button
				class="text-red-600 font-normal"
				on:click={async () => {
					const { getAuth } = await import('../lib/firebase');

					getAuth().signOut();
				}}>Logout</button
			>
		</div>
	{/if}
</div>
