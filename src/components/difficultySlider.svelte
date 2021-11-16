<script lang="ts">
  export let value:number;
</script>

<label>Difficulty</label>
<input
  type="range"
  name="difficulty"
  min="0"
  max="2"
  bind:value={value}
/>