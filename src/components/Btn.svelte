<script>
    import {Button} from "svelte-chota";

    export let icon
    export let func
    export let isLeft = false
    export let isTop = false

    const bgStyle = ":active {background-color: red;}" 
</script>


{#if isTop}
<div class="btn top" >
    <Button primary outline icon={icon} on:click={func} style={bgStyle}/>
</div>
{:else if isLeft}
    <div class="btn" style="left: 2rem;">
        <Button primary icon={icon} on:click={func} style={bgStyle}/>
    </div>
{:else}
    <div class="btn" style="right: 2rem;">
        <Button primary icon={icon} on:click={func} style={bgStyle}/>
    </div>
{/if}

<style>
    .btn {
      position: fixed;
      bottom: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .top{
      position: absolute;
      z-index: 100;
      
      right: 2rem;
      top: 0.4rem;

      background-color: none;
      
      height: 6rem;
      width: 6rem;
      
      align-items: center;
      justify-content: flex-end;

      font-size: 24px;
      transition: ease-in 0.5s opacity;
      background: none
  }
</style>