<script>
    import { Button, Field } from "svelte-chota";
    import Select from "../components/Select.svelte";
    import Input from "../components/Input.svelte";
    import { theme, audio, template } from '../data/store';
    import { getAudio } from "../data/audio";
    import { mdiCheck } from "@mdi/js";

    const motionFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdK25wEHpPXT5xOMQgKvpThD6RIchiV6jUZu68Df8WH_jGULQ/viewform"
  
    //////////////////////////////
    // Color Schemes
    //////////////////////////////
    let schemes = [
      "Nord", "TokyoNight", "Umbra", "OneDark", "Pastel",
      "Spotify", "Discord", "Moxfield", "Twitter", 
      "Whatsapp", "GitHub", "YouTube"
    ]
    let schemesValue = localStorage.getItem("theme")
  
    function processSchemes(){
      theme.set(schemesValue)
    }
  
    //////////////////////////////
    // Audio FX
    //////////////////////////////
    let sounds = [
      "Bell", "Box", "Cash", "Coin", "Error", "None"
    ]
    let soundsValue = localStorage.getItem("audio")

    function processSound(){
      audio.set(soundsValue)
      getAudio().play()
    }

    //////////////////////////////
    // Notes Template
    //////////////////////////////
    let templateValue = localStorage.getItem("template")
  
    function processTemplate(){
      template.set(templateValue)
    }

    
</script>
  
<nav>DEFINIÇÕES</nav>
<main>
  
  <Select id="scheme" bind:value={schemesValue} options={schemes} title="Tema" fun={processSchemes}/>
  
  <Select id="sound" bind:value={soundsValue} options={sounds} title="Efeitos Sonoros" fun={processSound}/>

  <Field label="Notas">
    <Input modifier="textarea" bind:value={templateValue} placeholder=""></Input>
    <Button primary 
      on:click={processTemplate}
      icon={mdiCheck}
    />
  </Field>
 <hr><br>
  
 <!--<div class="btndiv">
    <Button outline primary>
      Salvar Dados
    </Button>
    <Button outline primary>
      Carregar Dados
    </Button>
 </div>-->
 <div class="btndiv">
    <Button 
      outline primary
      style="width:100%" 
      on:click={() => window.open(motionFormLink, "_blank")}>
        Propor Moção
    </Button>
  </div>
  
  
  <br><br>
</main>
    
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

  .btndiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 2.2rem;
  }
</style>
  