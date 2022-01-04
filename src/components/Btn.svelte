<script>
    import {Button} from "svelte-chota";

    export let icon
    export let func
    export let isLeft = false
</script>

{#if isLeft}
    <div class="btn" style="left: 2rem;">
        <Button primary icon={icon} on:click={func} />
    </div>
{:else}
    <div class="btn" style="right: 2rem;">
        <Button primary icon={icon} on:click={func} />
    </div>
{/if}
<style>
    .btn {
      position: absolute;
      bottom: 1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
</style>