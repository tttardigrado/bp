<script>
    import {Button} from "svelte-chota";

    export let txt = ""
    export let func = () => {} 
</script>


<div class="btn mid" >
    <Button primary on:click={func}>
        {txt}
    </Button>
</div>

<style>
    .btn {
        position: fixed;
        bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 2rem;
    }

    .mid {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>