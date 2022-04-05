<script>
    import { Input } from "svelte-chota";
    export let value = ""
    export let placeholder
    export let modifier = ""

    // Text area
    export let rows = 5

    // Numeric
    export let min = 0 
    export let max = 1000
    export let step = 4

    const style = "background-color: var(--bg-secondary-color); color: var(--font-color)"
    const style2 = style + "width: 50%; height: calc(100% - 6rem); position: absolute; top:6rem; left:0; z-index:90"

</script>

{#if modifier == "date"}
    <!--Date Picker-->
    <Input 
        date
        style={style}
        placeholder={placeholder}
        bind:value
    />
{:else if modifier == "textarea"}
    <!--Simple Text Area-->
    <textarea
        rows={rows}
        style={style}
        bind:value
    />

{:else if modifier == "full"}
    <!--FullScreen Text Area-->
    <textarea
        style={style2}
        bind:value
    />
{:else if modifier == "num"}
    <!--Numeric input-->
    <Input 
        number style={style}
        min={min} max={max} step={step}
        placeholder={placeholder}
        bind:value
    />
{:else}
    <!--Simple Text Input-->
    <Input 
        style={style}
        placeholder={placeholder}
        bind:value
    />
{/if}

<style>
    textarea{
        resize: vertical;
        min-height: 5rem;
    }
</style>