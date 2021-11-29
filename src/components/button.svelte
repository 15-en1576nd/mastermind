<script lang="ts">
  let clazz: string = "";
	export { clazz as class };
</script>

<button on:click class={`rounded-full p-3 text-white cursor-pointer ${clazz}`}>
	<slot />
</button>
