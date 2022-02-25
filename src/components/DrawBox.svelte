<script>
    import {Card} from "svelte-chota";
    import DoubleField from "../components/DoubleField.svelte";

    export let state
  
    export const modal_hide = () => {}
</script>
<Card style="box-shadow: none; padding-top: 2rem; padding-bottom: 1rem">
    <DoubleField 
        title="1º Governo" 
        field1={state.draw[0][0]} 
        field2={state.draw[0][1]}
    />
    <DoubleField 
        title="1ª Oposição" 
        field1={state.draw[1][0]} 
        field2={state.draw[1][1]}
    />
    <DoubleField 
        title="2º Governo" 
        field1={state.draw[2][0]} 
        field2={state.draw[2][1]}
    />
    <DoubleField 
        title="2ª Oposição" 
        field1={state.draw[3][0]} 
        field2={state.draw[3][1]}
    />
</Card>