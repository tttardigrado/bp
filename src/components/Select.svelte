<script>
    // Exported values
    
    // Select Title
    export let title = ""

    export let id = ""
    
    // Select Options
    export let options = []
    
    // Current Select Value
    export let value = ""

    // Function to be executed OnChange
    export let fun = () => {}
</script>

<label for={id}>{title}</label>
<select bind:value name="{id}" id="{id}" on:change={fun} >
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