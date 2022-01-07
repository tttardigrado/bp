<script>
    import { Input } from "svelte-chota";
    export let value = ""
    export let placeholder
    export let modifier = ""

    let style = "background-color: var(--bg-secondary-color); color: var(--font-color)"
</script>

{#if modifier == "date"}
<Input 
    date
    style={style}
    placeholder={placeholder}
    bind:value
/>
{:else if modifier == "textarea"}
<textarea
    rows="5"
    style={style}
    bind:value
></textarea>
{:else}
<Input 
    style={style}
    placeholder={placeholder}
    bind:value
/>
{/if}

<style>
    textarea{
        resize: vertical;
        min-height: 10rem;
    }
</style>