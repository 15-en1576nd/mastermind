<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { user as userStore } from '$lib/stores';

	let signin = () => {};

	onMount(async () => {
		if (!browser) return;
		const {
			GoogleAuthProvider,
			browserLocalPersistence,
			setPersistence,
			getAuth,
			signInWithPopup
		} = await import('../lib/firebase');

		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		setPersistence(auth, browserLocalPersistence);

		auth.onAuthStateChanged((user) => {
			userStore.set(user);
		});

		signin = () =>
			signInWithPopup(auth, provider).catch((e) => {
				alert(`Failed to sign in to ${e.email}: ${e.message}`);
			});
	});
</script>

<button on:click={signin}>Sign in with Google</button>
