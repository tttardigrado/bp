<script>
  import { mdiMinus, mdiPlus, mdiCalculatorVariantOutline } from "@mdi/js";
  import { Field, Button } from "svelte-chota";
  import Btn from "../components/Btn.svelte";
  import { bpBreak } from "../data/calc";

  ////////////////////////////////////////
  // ROOMS
  ////////////////////////////////////////
  let rooms = 8;
  const plusRooms  = () => rooms++;
  const minusRooms = () => rooms = Math.max(rooms-1, 0);

  ////////////////////////////////////////
  // ROUNDS
  ////////////////////////////////////////
  let rounds = 5;
  const plusRound  = () => rounds++;
  const minusRound = () => rounds = Math.max(rounds-1, 0);

  ////////////////////////////////////////
  // BREAKS
  ////////////////////////////////////////
  let breaks = 8;
  const plusBreak  = () => breaks++;
  const minusBreak = () => breaks = Math.max(breaks-1, 0);


  ////////////////////////////////////////
  // RESULTS
  ////////////////////////////////////////
  let worstText = "Todas as equipas com X ou mais pontos fazem break.";
  let bestText = "Todas as equipas com X ou mais pontos fazem break.";

  function calculate() {
    // every room has 4 teams
    let teams = rooms * 4;

    // sanitize input
    if (breaks > teams) {
      breaks = teams;
    }

    let txt = bpBreak(teams, rounds, breaks);
    worstText = txt[0];
    bestText = txt[1];
  }
</script>

<nav>Calculadora</nav>
<main>
  <Field gapless label="Salas">
    <Button on:click={minusRooms} icon={mdiMinus} primary />
    <span> {rooms} </span>
    <Button on:click={plusRooms} icon={mdiPlus} primary />
  </Field>

  <Field gapless label="Rondas">
    <Button on:click={minusRound} icon={mdiMinus} primary />
    <span> {rounds} </span>
    <Button on:click={plusRound} icon={mdiPlus} primary />
  </Field>

  <Field gapless label="Breaks">
    <Button on:click={minusBreak} icon={mdiMinus} primary />
    <span> {breaks} </span>
    <Button on:click={plusBreak} icon={mdiPlus} primary />
  </Field>

  <br />

  <h3>Melhor Caso</h3>
  {bestText}

  <br />
  <br />
  <h3>Pior Caso</h3>
  {worstText}

  <Btn icon={mdiCalculatorVariantOutline} func={calculate} />
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
