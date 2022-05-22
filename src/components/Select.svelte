<script lang="ts">
  // Exported values

  // Select Title
  export let title = "";

  export let id = "";

  // Select Options
  export let options: number[] | string[] = [];

  // Current Select Value
  export let value: number | string = "";

  // Function to be executed OnChange
  export let fun = () => {};
</script>

{#if title}
  <label for={id}>{title}</label>
{/if}
<select bind:value name={id} {id} on:change={fun}>
  {#each options as o}
    <option value={o}>{o}</option>
  {/each}
</select>

<style>
  select {
    background-color: var(--bg-secondary-color);
    color: var(--font-color);
    margin-bottom: 2rem;
  }

  label {
    margin-bottom: 0.5rem;
  }
</style>
