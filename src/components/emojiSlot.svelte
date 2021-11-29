<script lang="ts">
    export let active = false;
</script>

<div class={`slot ${active ? 'bg-gray-200' : ''}`}>
    <slot></slot>
</div>

<style>
    .slot {
        width: 2rem;
        height: 2rem;
        display: flex;
        text-align: center;
		border: 1px solid #474554;
		border-radius: 2px;
        justify-content: center;
		margin: 0 0 1em 0;
    }
</style>