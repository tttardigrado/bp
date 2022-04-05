<script>
    import { mdiMinus, mdiPlus, mdiCalculatorVariantOutline } from "@mdi/js" 
    import { Field, Button} from "svelte-chota"   
    import Btn from "../components/Btn.svelte"
    import { bpBreak } from "../data/calc"
    

    ////////////////////////////////////////
    // TEAMS
    ////////////////////////////////////////
    let teams = 8
    function plusTeams() {
      teams += 4
    }
    function minusTeams() {
      teams -= 4

      if (teams < 0) {
        teams = 0
      }
    }

    ////////////////////////////////////////
    // ROUNDS
    ////////////////////////////////////////
    let rounds = 5
    function plusRound() {
      rounds++
    }
    function minusRound() {
      rounds--

      if (rounds < 0) {
        rounds = 0
      }
    }

    ////////////////////////////////////////
    // BREAKS
    ////////////////////////////////////////
    let breaks = 8
    function plusBreak() {
      breaks += 4
    }
    function minusBreak() {
      breaks -= 4

      if (breaks < 0) {
        breaks = 0
      }
    }

    ////////////////////////////////////////
    // RESULTS
    ////////////////////////////////////////
    let worstText = "Todas as equipas com X ou mais pontos fazem break."
    let bestText = "Todas as equipas com X ou mais pontos fazem break."
    function calculate() {
      // sanitize input
      if (breaks > teams) {
        breaks = teams
      }

      let txt = bpBreak(teams, rounds, breaks)
      worstText = txt[0]
      bestText = txt[1]
    }
</script>
  
<nav>Calculadora</nav>
<main>
    <Field gapless label="Equipas">
        <Button on:click={minusTeams} icon={mdiMinus} primary/>
        <span> {teams} </span>
        <Button on:click={plusTeams} icon={mdiPlus} primary/>
    </Field>

    <Field gapless label="Rondas">
      <Button on:click={minusRound} icon={mdiMinus} primary/>
      <span> {rounds} </span>
      <Button on:click={plusRound} icon={mdiPlus} primary/>
    </Field>

    <Field gapless label="Breaks">
      <Button on:click={minusBreak} icon={mdiMinus} primary/>
      <span> {breaks} </span>
      <Button on:click={plusBreak} icon={mdiPlus} primary/>
    </Field>

  <br>

  <h3>Melhor Caso</h3>
  {bestText}

  <br>
  <br>
  <h3>Pior Caso</h3>
  {worstText}

  <Btn icon={mdiCalculatorVariantOutline} func={calculate}/>
  
</main>
    
<style>
  main {
    padding: 2rem;
    padding: 2rem;
    max-width: 700px;
    margin: auto;
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

  span {
    width: 100vw;
    background-color: var(--nav-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
</style>
  