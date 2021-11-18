<script lang="ts">
	import { selectedEmoji } from '$lib/stores';
	import emojiMap from '$lib/emojimap';
	import Emoji from './emoji.svelte';
	import EmojiSlot from './emojiSlot.svelte';
	import type { CodeDigit } from '$lib/types/code';

	const clickHandler = (emojiIndex: number) => selectedEmoji.set(emojiIndex as CodeDigit);
</script>

Hey
<div class="flex">
	<p>{$selectedEmoji}</p>
	{#each { length: 8 } as _, i}
		<EmojiSlot>
			<button on:click={() => clickHandler(i)}>
				<Emoji emoji={emojiMap[i]} />
			</button>
		</EmojiSlot>
	{/each}
</div>
