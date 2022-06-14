<script>
    import Btn from "./Btn.svelte";
    import {mdiPlus, mdiMinus} from "@mdi/js"

    export let value = ""
    
    let fontSize = 16
    const upFont   = () => fontSize += 5
    const downFont = () => fontSize -= 5
</script>

<textarea bind:value style="font-size: {fontSize}px" />

<Btn icon={mdiPlus}  func={upFont}                 />
<Btn icon={mdiMinus} func={downFont} isLeft={true} />

<style>
    textarea {
        background-color: var(--bg-secondary-color); 
        color: var(--font-color);
        width: 100%;
        height: calc(100% - 6rem);
        position: absolute;
        top:6rem;
        left:0;
        resize: none;
    }
</style>