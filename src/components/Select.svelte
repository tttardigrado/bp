<script>
    export let title = "Title"
    export let id = ""
    export let options = []
    export let value = ""
</script>

<label for={id}>{title}</label>
<select bind:value name="{id}" id="{id}" >
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