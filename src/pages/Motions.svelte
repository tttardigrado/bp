<script>
  import { mdiMagnify, mdiPlus} from "@mdi/js";
  import { Button, Field } from "svelte-chota";
  import Input from "../components/Input.svelte";
  import MotionCard from "../components/MotionCard.svelte";
  import Btn from "../components/Btn.svelte";
  import { debates } from "../data/store";

  // Local Storage Values
  let data = JSON.parse(localStorage.getItem("debates"));
  let template = localStorage.getItem("template")


  // Default Strings
  const errorMsg = "Desculpa, a CA team não tem nenhuma Moção!"
  const defaultInfoSlide = "Desculpa, não temos um Info Slide disponível!"
  const defaultMotion = "Uma moção quentinha a sair!"

  let motion = defaultMotion
  let infoSlide = defaultInfoSlide
  let keyword = ""

  function show(msg, color) {
    // Get #notify
    let notify = document.getElementById("notify")

    // Change properties
    notify.innerText = msg
    notify.style.color = `var(--color-${color})`
    notify.style.opacity = "100%"

    // after 2s start to fade
    setTimeout(() => {
      notify.style.opacity = "0%"
    }, 2000);
  }

  // Fetch a new Motion from the database
  // Use the keyword provided by the input to filter
  function fetchMotion() {
    let link = ""

    if (keyword == "") {
      // No keyword -> just gets a random motion from the DB
      link = "/api/getRandMotion"
    } else {
      // Gets a random motion that is tagged with this keyword
      link = `/api/getKeyWordedMotion?kw=${keyword}`
    }

    fetch(link)
      .then(resp => resp.json())
      .then(resp => {
        motion = resp["motion"]

        // If the motion has an infoslide -> retrieve it
        // If it doesn't -> default
        infoSlide = resp["infoslide"] || defaultInfoSlide

        show("Moção a sair do forno!", "success")
      })
      .catch(err => {
        // Did not find a motion
        motion = errorMsg
        infoSlide = defaultInfoSlide

        show("Desculpa!", "error")
      })
  }  


  // Add a new debate
  function addDebate() {
    if (motion == errorMsg || motion == defaultMotion) {
      show("Não há moção!", "error")
      return 
    } 

    // Set the InfoSlide parameter for the debate
    let info = infoSlide != defaultInfoSlide ? infoSlide : "" 

    // Add debate
    data.push(
      {
        house: "1º Governo",
        call: [0, 0, 0, 0],
        motion: motion,
        infoslide: info,
        notes: template
      }
    )

    // Set the localStorage
    debates.set(data)

    show("Debate Registado!", "success")
  }
</script>


<nav>MOÇÕES</nav>
<main>
  <!-- Search Bar -->
  <Field gapless >
    <Input placeholder="Palavra Chave..." bind:value={keyword}/>
    <Button 
      primary 
      icon={mdiMagnify} 
      on:click={fetchMotion}
    />
  </Field>

  <!-- Motion Card -->
  <MotionCard
    name="Moção"
    text={motion}
  />

  <!-- Info Slide Card -->
  <MotionCard
    name="Info Slide"
    text={infoSlide}
  />

  <!-- Add Current motion as a debate -->
  <Btn icon={mdiPlus} func={addDebate}/>

  <span id="notify"/>
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
  
  

  #notify {
    background-color: var(--bg-secondary-color);
    
    margin: auto;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    text-align: center;

    position: fixed;
    bottom: 1.8rem;
    left: 50%;
    transform: translate(-50%, 0);
    

    opacity: 0%;
    transition: opacity 1.5s;

    box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3);

  }
</style>