<script>
  import "chota";

  import Timer from "./pages/Timer.svelte";
  import Draw from "./pages/Draw.svelte";
  import Debates from "./pages/Debates.svelte";
  import Settings from "./pages/Settings.svelte";
  import Nav from "./components/Nav.svelte";
  import Error from "./pages/Error.svelte";

  let page = "Timer"

</script>

<Nav bind:page ></Nav>
{#if page == "Timer"}
  <Timer></Timer>
{:else if page == "Draw"}
  <Draw></Draw>
{:else if page == "Debates"}
  <Debates></Debates>
{:else if page == "Motions"}
  <Error title="MOTIONS"></Error>
{:else if page == "Stats"}
  <Error title="STATS"></Error>
{:else if page == "Settings"}
  <Settings></Settings>
{/if}
  
<style>

</style>
