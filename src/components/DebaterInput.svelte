<script>
    import "chota";
    export let teams = 0
    export let debaterNum = 1
    export let name = "Debater"
    import { Input, Button, Field} from "svelte-chota";

    const team = Math.floor((debaterNum -1) / 2)

</script>

<Field gapless>
    
    <Input 
        style="background-color: var(--bg-secondary-color); color: var(--font-color)"
        placeholder="Debater {debaterNum}"
        bind:value={name}
    />
    <Button
        primary
        on:click={() => teams[team] = !teams[team]} 
    >{teams[team] ? team + 1 : 0}</Button>
    
</Field>