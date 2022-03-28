<script>
  import "chota";

  import Timer from "./pages/Timer.svelte";
  import Draw from "./pages/Draw.svelte";
  import Debates from "./pages/Debates.svelte";
  import Settings from "./pages/Settings.svelte";
  import Motions from "./pages/Motions.svelte";
  import Nav from "./components/Nav.svelte";
  import Stats from "./stats/Stats.svelte";
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
{:else if page == "Estatísticas"}
  <Stats/>
{:else if page == "Definições"}
  <Settings/>
{/if}