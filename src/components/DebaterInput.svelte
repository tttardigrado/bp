<script>
  import "chota";
  export let cat = 0;
  export let debaterNum = 1;
  export let name = "Debater";
  import { Input, Button, Field } from "svelte-chota";
</script>

<Field gapless>
  <Input
    style="background-color: var(--bg-secondary-color); color: var(--font-color)"
    placeholder="Debater {debaterNum}"
    bind:value={name}
  />
  <Button style="width: 11rem" primary on:click={() => (cat = (cat + 1) % 2)}>
    {#if cat == 0}
      AM
    {:else}
      PRO
    {/if}
  </Button>
</Field>

