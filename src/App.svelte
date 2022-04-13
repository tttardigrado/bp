<script lang="ts">
  import "chota";

  import Timer from "./pages/Timer.svelte";
  import Draw from "./pages/Draw.svelte";
  import Debates from "./pages/Debates.svelte";
  import Settings from "./pages/Settings.svelte";
  import Motions from "./pages/Motions.svelte";
  import Ressources from "./pages/Recursos.svelte";
  import Nav from "./components/Nav.svelte";
  import Calc from "./pages/Calc.svelte";
  //import Error from "./pages/Error.svelte";


  let page = "Temporizador"

  
</script>

<Nav bind:page ></Nav>

{#if page == "Temporizador"}
  <Timer/>
{:else if page == "Draw"}
  <Draw/>
{:else if page == "Debates"}
  <Debates/>
{:else if page == "Moções"}
  <Motions/>
{:else if page == "Definições"}
  <Settings/>
{:else if page == "Recursos"}
  <Ressources/>
{:else if page == "Calculadora"}
  <Calc/>
{/if}