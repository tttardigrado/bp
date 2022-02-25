<script>
  import { mdiMagnify } from "@mdi/js";
  import { Button, Field } from "svelte-chota";
  import Input from "../components/Input.svelte";

  // Default Strings
  const errorMsg = "Desculpa, a CA team não tem nenhuma Moção!"
  const defaultInfoSlide = "Desculpa, não temos um Info Slide disponível!"
  const defaultMotion = "Uma moção quentinha a sair!"

  let motion = defaultMotion
  let infoSlide = defaultInfoSlide
  let keyword = ""

  // Fetch a new Motion from the database
  // Use the keyword provided by the input to filter
  function fetchMotion() {
    let link = ""

    if (keyword == "") {
      link = "/api/getRandMotion"
    } else {
      link = `/api/getKeyWordedMotion?kw=${keyword}`
    }

    fetch(link)
      .then(resp => resp.json())
      .then(resp => {
        motion = resp["motion"]

        // If the motion has an infoslide -> retrieve it
        // If it doesn't -> default
        infoSlide = resp["infoslide"] || defaultInfoSlide
      })
      .catch(err => {
        // Did not find a motion
        motion = errorMsg
        infoSlide = defaultInfoSlide
      })
  }  
</script>


<nav>MOÇÕES</nav>
<main>

  <!-- Search -->
  <Field gapless >
    <Input placeholder="Palavra Chave..." bind:value={keyword}/>
    <Button 
      primary 
      icon={mdiMagnify} 
      on:click={fetchMotion}
    />
  </Field>

  <!-- Motion Card -->
  <div class="block">
    <div class="title">Moção</div>
    {motion}
  </div>

  <!-- Info Slide Card -->
  <div class="block">
    <div class="title">Info Slide</div>
    {infoSlide}
  </div>
  
</main>
  
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
  
  .block {
    border-radius: 6px;
    border: 1px solid var(--color-darkGrey);
    width:100%;
    
    background-color: var(--bg-secondary-color);
    transition: border 0.3s;
    margin-bottom: 2rem;
    padding: 2rem;
    text-align: justify;
    text-justify: inter-word;
  }

  .block:hover{
    border: 1px solid var(--color-grey);
  }

  .title{
    font-size: 2.5rem;
    margin: auto;
  }
</style>