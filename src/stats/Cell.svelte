<script>
    export let isToShow = true
    export let num = 0
    export let percentage = 0.5
</script>

{#if isToShow}
    <div class="cell" style="">
        <div class="bg" style="--op: {percentage}"/>
        <div class="value" > {num} </div>
    </div>
{:else}
    <div class="cell" style="">
        <div class="bg" style="--op: {percentage}"/>
    </div>
{/if}

<style>
    .cell {
        width: 6rem;
        height: 6rem;
        position: relative;
        margin: 0.2rem;
    }

    .cell .bg {
        background-color: var(--color-primary);
        opacity: var(--op);
        width: 100%;
        height: 100%;
    }

    .value {
        position: absolute;
        top: 0;
        left: 0;

        opacity: 1;
        width: 100%;
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 350px){
        .cell{
            width: 4.8rem;
            height: 4.8rem;
        }
    }
</style>