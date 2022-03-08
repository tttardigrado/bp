<script>
  import { mdiPlus, mdiFullscreen, mdiFullscreenExit } from "@mdi/js";
  import { debates } from "../data/store";
  import Btn from "../components/Btn.svelte";
  import DebateCard from "../components/DebateCard.svelte";
  import Input from "../components/Input.svelte";
  import SingleDebate from "./SingleDebate.svelte";

  let isOnDebatePage = false;
  let isOnFullWriteScreen = false;
  let debateIndex = 0;

  // Debates data object
  let data = JSON.parse(localStorage.getItem("debates"));

  // Template for "new debates" note field 
  let template = localStorage.getItem("template")

  // Open a new debate page
  function openDebate(index) {
    isOnDebatePage = true
    debateIndex = index
  }

  function switchFullScreen() {
    isOnFullWriteScreen = !isOnFullWriteScreen
  }

  // Exit out of a debate page
  function closeDebate() {
    isOnDebatePage = false
    isOnFullWriteScreen = false

    // save data
    debates.set(data)
  }

  // Delete a debate from localStorage
  function deleteDebate(index) {
    // Update data
    data.splice(index, 1)
    data = data
    debates.set(data)

    // Change the view
    isOnFullWriteScreen = false
    isOnDebatePage = false
  }

  // Add a new debate
  function addDebate() {
    // Default debate  
    data.push(
      {
        house: "1º Governo",
        call: [0, 0, 0, 0],
        motion: "EC...",
        infoslide: "",
        notes: template
      }
    )

    // Update date (svelte needs this to update the view)
    data = data

    // Set the localStorage
    debates.set(data)
  }
</script>


{#if isOnFullWriteScreen}
  <!--Note Taking Full Screen Mode-->
  <Btn 
    icon={mdiFullscreenExit} 
    isTop={true} 
    func={switchFullScreen}
  />
  <nav>DEBATES</nav>
  <!--Full Screen Editor-->
  <Input 
    modifier="full" 
    bind:value={data[debateIndex].notes}
  />
  
{:else if isOnDebatePage}
  <!--Debate Overview Mode-->
  <Btn 
    icon={mdiFullscreen} 
    isTop={true} 
    func={switchFullScreen}
  />
  <SingleDebate
    bind:data={data[debateIndex]}
    onExit={closeDebate}
    deleteDebate={() => deleteDebate(debateIndex)}
  />

{:else}
  <!--Debates List Mode-->
  <nav>DEBATES</nav>

  <!--List With All Debates As Cards-->
  <main>
    {#each data as debate, index}
      <DebateCard
        motion={debate.motion}
        info={debate.infoslide}
        pos={debate.house}
        func={() => openDebate(index)}
      />
    {/each}
   
    <!--New Debate Icon-->
    <Btn icon={mdiPlus} func={addDebate}/>
  </main>
{/if}
  
<style> 
  main {
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
</style>