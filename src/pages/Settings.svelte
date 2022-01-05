<script>
    import "chota";

    import Select from "../components/Select.svelte";
    import { theme, audio } from '../data/store';
    import { getAudio } from "../data/audio";
  
    let schemes = [
      "Nord", "GruvBox", "TokyoNight", "Umbra", "OneDark"
    ]
    let schemesValue = localStorage.getItem("theme")
  
    function processSchemes(){
      theme.set(schemesValue)
    }
  
    let sounds = [
      "Bell", "Box", "Cash", "Coin", "Error"
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
</style>
  