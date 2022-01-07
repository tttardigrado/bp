<script>
    export let motion = ""
    export let pos = "Opening Gov"
    export let func = () => {}

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
        {#if pos === 1 || pos === "Opening Gov"}
            <span class="og">Opening Gov</span>
        {:else if pos === 2 || pos === "Opening Opp"}
            <span class="oo">Opening Opp</span>
        {:else if pos === 3 || pos === "Closing Gov"}
            <span class="cg">Closing Gov</span>
        {:else if pos === 4 || pos === "Closing Opp"}
            <span class="co">Closing Opp</span>
        {:else if pos === 4}
            <span class=""></span>
        {/if}
    </div>
</div>

<style>
  .debate {
    border-radius: 6px;
    border: 1px solid var(--color-darkGrey);
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

  .info .og {
    color: var(--color-1-min);
  }
  .info .oo {
    color: var(--color-6-min);
  }
  .info .cg {
    color: var(--color-7-min);
  }
  .info .co {
    color: var(--color-7-15-min);
  }
</style>