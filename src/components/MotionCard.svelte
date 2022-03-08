<script>
    import {Button} from "svelte-chota"
    import {mdiMinus} from "@mdi/js"

    export let text = ""
    export let name = ""

    let isShown = true
    
    function flipShow() {
        isShown = !isShown
    }
</script>

<div class="block">
    <div class="title">
        <span>{name}</span> 
        <Button 
            clear
            icon={mdiMinus}
            on:click={flipShow}
        />
    </div>
    {#if isShown}
        {text}
    {/if}
</div>


<style>
  .block {
    border-radius: 6px;
    border: 1px solid var(--bg-secondary-color);
    width:100%;
    
    background-color: var(--bg-secondary-color);
    transition: border 0.3s;
    margin-bottom: 2rem;
    padding: 2rem;
    text-align: justify;
    text-justify: inter-word;
  }

  .block:hover{
    border: 1px solid var(--color-grey);
  }

  .title{
    font-size: 2.5rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>