<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { user as userStore } from '$lib/stores';

	// We assign this here so we can override it once firebase is imported
	let signin = () => {};

	// To prevent firebase from being ran on the server, we need to import it on the browser
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
		// Make sure that firebase remembers the user
		setPersistence(auth, browserLocalPersistence);

		auth.onAuthStateChanged((user) => {
			userStore.set(user);
		});

		signin = () =>
			// TODO: make this a modal
			signInWithPopup(auth, provider).catch((e) => {
				alert(`Failed to sign in to ${e.email}: ${e.message}`);
			});
	});
</script>

<button on:click={signin}>Sign in with Google</button>
