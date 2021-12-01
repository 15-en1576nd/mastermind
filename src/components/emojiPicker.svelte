<script lang="ts">
	import { selectedEmoji } from '$lib/stores';
	import emojiMap from '$lib/emojimap';
	import Emoji from './emoji.svelte';
	import EmojiSlot from './emojiSlot.svelte';
	import type { CodeDigit } from '$lib/types/code';

	const clickHandler = (emojiIndex: number) => selectedEmoji.set(emojiIndex as CodeDigit);
</script>

<div class="flex">
	{#each { length: 8 } as _, i}
		<!-- We set this to active whenever it is selected to give the user feedback -->
		<EmojiSlot active={$selectedEmoji===i}>
			<button on:click={() => clickHandler(i)}>
				<Emoji emoji={emojiMap[i]} />
			</button>
		</EmojiSlot>
	{/each}
</div>
