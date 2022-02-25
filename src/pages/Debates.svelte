<script>
    import { mdiPlus, mdiFullscreen, mdiFullscreenExit } from "@mdi/js";
    import { debates } from "../data/store";
    import Btn from "../components/Btn.svelte"
    import DebateCard from "../components/DebateCard.svelte"
    import Input from "../components/Input.svelte"
    import SingleDebate from "./SingleDebate.svelte"
  
    let isOnDebatePage = false
    let isOnFullWriteScreen = false
    let debateIndex = 0  

    //debates.set()
    let data = JSON.parse(localStorage.getItem("debates")) 
    let template =  localStorage.getItem("template")
    
    function openDebate(index) {
      isOnDebatePage = true
      debateIndex = index
    }

    function switchFullScreen() {
      isOnFullWriteScreen = !isOnFullWriteScreen
    }

    function closeDebate() {
      isOnDebatePage = false
      isOnFullWriteScreen = false
      debates.set(data)
    }

    function deleteDebate(index) {
      data.splice(index, 1)
      data = data
      debates.set(data)
      isOnFullWriteScreen = false
      isOnDebatePage = false
    }

    function addDebate() {
      data.push(
        {
          house: "1º Governo",
          call: [0, 0, 0, 0],
          motion: "EC...",
          notes: template
        }
      )
      data = data
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

  <main>
    {#each data as d, i}
      <DebateCard
        motion={d.motion}
        pos={d.house}
        func={() => openDebate(i)}
      />
    {/each}
   
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