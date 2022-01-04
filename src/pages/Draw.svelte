<script>
    import { mdiShuffleVariant } from "@mdi/js";
    import {Modal} from "svelte-chota";
    import DrawBox from "../components/DrawBox.svelte";
    import DebaterInput from "../components/DebaterInput.svelte";
    import Btn from "../components/Btn.svelte"
  
    let modal_open = false;
    const modal_show = (event) => (modal_open = true);
    const modal_hide = (event) => (modal_open = false);
  
    let state = {
      debaters: [],
      teams: [
        false, false, false, false
      ],
      draw: [
        ["", ""], ["", ""], ["", ""], ["", ""]
      ]
    }
    for (let i = 0; i < 8; i++){
      state.debaters.push(`Debater ${i+1}`)
    }
  
    function separate(){
      let toChoose = []
      let chosenTeams = []
      for (let i = 0; i < 4; i++){
        if (!state.teams[i]){
          toChoose.push(
            state.debaters[i*2]
          )
          toChoose.push(
            state.debaters[i*2 + 1]
          )
        } else {
          chosenTeams.push(
            [state.debaters[i*2], state.debaters[i*2 + 1]]
          )
        }
      }
  
      return [toChoose, chosenTeams]
    }
  
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
  
    function giveDraw() {
      let [toChoose, chosenTeams] = separate()
  
      toChoose = shuffle(toChoose)
  
      for (let i = 0; i < toChoose.length / 2; i++){
        chosenTeams.push(
          [toChoose[i*2], toChoose[i*2 + 1]]
        )  
      }
  
      state.draw = shuffle(chosenTeams)
  
      modal_show()
      
    }
</script>


<nav>DRAW</nav>
<main>
  {#each state.debaters as s, i}
    <DebaterInput 
      debaterNum={i+1} 
      bind:teams={state.teams} 
      bind:name={s}/>
  {/each}
  
  <Btn icon={mdiShuffleVariant} func={giveDraw}></Btn>
  
  <Modal bind:open={modal_open} style="padding: 5rem; background: none;">
    <DrawBox state={state}/>
  </Modal>
</main>
  
<style>
  main {
    padding: 2rem;
  }

  nav {
    background-color: var(--nav-color);
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
  }
</style>