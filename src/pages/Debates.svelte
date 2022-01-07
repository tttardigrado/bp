<script>
    import { mdiPlus } from "@mdi/js";
    import { debates } from "../data/store";
    import Btn from "../components/Btn.svelte"
    import DebateCard from "../components/DebateCard.svelte"
    import SingleDebate from "./SingleDebate.svelte"
  
    let isOnDebatePage = false
    let debateIndex = 0  

    //debates.set()
    let data = JSON.parse(localStorage.getItem("debates")) 
    
    function openDebate(index) {
      isOnDebatePage = true
      debateIndex = index
    }

    function closeDebate() {
      isOnDebatePage = false
      debates.set(data)
    }

    function deleteDebate(index) {
      isOnDebatePage = false
      data.splice(index, 1)
      data = data
      debates.set(data)
    }

    function addDebate() {
      data.push(
        {
          house: "Opening Gov",
          call: [0, 0, 0, 0],
          motion: "THB...",
          notes: "",
        }
      )
      data = data
      debates.set(data)
    }
</script>


{#if isOnDebatePage}

  <SingleDebate
    bind:data={data[debateIndex]}
    onExit={closeDebate}
    deleteDebate={() => deleteDebate(debateIndex)}
  />

{:else}

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