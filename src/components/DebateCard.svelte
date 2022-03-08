<script>
    export let motion = ""
    export let info = ""
    export let pos = "1º Governo"
    export let func = () => {}

    const houses = {
        OG: "1º Governo",
        OO: "1ª Oposição",
        CG: "2º Governo",
        CO: "2ª Oposição",
    }

    // Format the Motion to fit the screen
    const maxMotionLen = 70
    if (motion.length > maxMotionLen) {
        motion = motion.substring(0, maxMotionLen) + "..."
    }
</script>

<div class="debate" on:click={func}>
    <div class="motion">
       {motion}
    </div>
    <div class="info">
        {#if pos === 1 || pos === houses.OG}
            <span class="og">{houses.OG}</span>
        {:else if pos === 2 || pos === houses.OO}
            <span class="oo">{houses.OO}</span>
        {:else if pos === 3 || pos === houses.CG}
            <span class="cg">{houses.CG}</span>
        {:else if pos === 4 || pos === houses.CO}
            <span class="co">{houses.CO}</span>
        {:else}
            <span></span>
        {/if}
        {#if info != ""}
          <span class="is">IS</span>
        {:else}
          <span></span>
        {/if}
    </div>
</div>

<style>
  .debate {
    border-radius: 6px;
    border: 1px solid var(--bg-secondary-color);
    width:100%;
    
    background-color: var(--bg-secondary-color);
    transition: border 0.3s;
    margin-bottom: 2rem;
  }

  .debate:hover{
    border: 1px solid var(--color-grey);
    
  }

  .motion {
    height: 7rem;
    border-bottom: 1px dashed var(--color-grey);
    display: flex;
    align-items: center;
    padding: 2rem;
    font-weight: 900;
    overflow: hidden;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .info .og, 
  .is {
    color: var(--color-1-min);
  }
  .info .cg {
    color: var(--color-6-min);
  }
  .info .oo {
    color: var(--color-7-min);
  }
  .info .co {
    color: var(--color-7-15-min);
  }
</style>