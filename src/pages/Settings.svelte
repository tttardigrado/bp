<script>
    import { Button, Container} from "svelte-chota";
    import Select from "../components/Select.svelte";
    import { theme, audio } from '../data/store';
    import { getAudio } from "../data/audio";

    const motionFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdK25wEHpPXT5xOMQgKvpThD6RIchiV6jUZu68Df8WH_jGULQ/viewform"
  
    let schemes = [
      "Nord", "GruvBox", "TokyoNight", "Umbra", "OneDark"
    ]
    let schemesValue = localStorage.getItem("theme")
  
    function processSchemes(){
      theme.set(schemesValue)
    }
  
    let sounds = [
      "Bell", "Box", "Cash", "Coin", "Error", "None"
    ]
    let soundsValue = localStorage.getItem("audio")

    function processSound(){
      audio.set(soundsValue)
      getAudio().play()
    }

</script>
  
<nav>Settings</nav>
<main>
  
  <Select id="scheme" bind:value={schemesValue} options={schemes} title="Color Schemes" fun={processSchemes}/>
  
  <Select id="sound" bind:value={soundsValue} options={sounds} title="Sound effects" fun={processSound}/>

  <br><hr><br>
  
  <Container>
    <Button primary on:click={() => window.open(motionFormLink, "_blank")}>
      Add motions
    </Button>
  </Container>

</main>

<div class="credits">
  Made by: <a href="https://force4760.netlify.app/" target="_blank"> Gonçalo Teixeira</a>
</div>
    
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
  
  .credits {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
  }
  .credits a {
    color: var(--font-color);
  }

  a:hover {
    text-decoration: none;
  }

  .bttn {
    border-radius: 6px;
    border: 1px solid var(--color-darkGrey);
    background-color: var(--bg-secondary-color);
    transition: border 0.3s;
    padding: 1rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--font-color)
  }

  .bttn:hover {
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--color-grey);
    color: var(--font-color);
    text-decoration: none;
  }
</style>
  