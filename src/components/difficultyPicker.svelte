<script lang="ts">
	import Button from './button.svelte';

	export let value: number;
</script>

<div>
	<div class="flex justify-around">
		<Button class="bg-green-500" on:click={() => (value = 0)}>EASY</Button>
		<Button class="bg-yellow-500" on:click={() => (value = 1)}>MEDIUM</Button>
		<Button class="bg-red-500" on:click={() => (value = 2)}>HARD</Button>
	</div>
</div>
