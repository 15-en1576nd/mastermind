<script lang="ts">
	let clazz: string = '';
	export let disabled = false;
	export { clazz as class };
</script>

<button
	on:click
	{disabled}
	class={`rounded-full p-3 text-white cursor-pointer shadow-xl disabled:bg-gray-500 disabled:cursor-not-allowed ${clazz}`}
>
	<slot />
</button>
