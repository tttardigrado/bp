<script lang="ts">
  import { Button, Field } from "svelte-chota";
  import Select from "../components/Select.svelte";
  import Input from "../components/Input.svelte";
  import { theme, audio, template, wake, wakeModes } from "../data/store";
  import { getAudio } from "../data/audio";
  import { mdiCheck } from "@mdi/js";

  //////////////////////////////
  // Forms
  //////////////////////////////
  const motionFLink: string =
    "https://docs.google.com/forms/d/e/1FAIpQLSdK25wEHpPXT5xOMQgKvpThD6RIchiV6jUZu68Df8WH_jGULQ/viewform";

  const bugFLink: string =
    "https://docs.google.com/forms/d/1aQsyAexynhVRHmF7wJjVavKcPBIPbBXyVXD8WKaxWks/edit?usp=sharing";

  const open = (link: string) => window.open(link, "_blank");

  //////////////////////////////
  // Color Schemes
  //////////////////////////////
  let schemes = ["Nord", "TokyoNight", "Umbra", "OneDark", "Pastel", "Spotify", "Discord", "Moxfield", "Twitter", "Whatsapp", "GitHub", "YouTube"];
  let schemesValue = localStorage.getItem("theme");

  const processSchemes = () => theme.set(schemesValue);

  //////////////////////////////
  // Audio FX
  //////////////////////////////
  let sounds = ["Bell", "Coin", "Error", "None"];
  let soundsValue = localStorage.getItem("audio");

  const processSound = () => {
    audio.set(soundsValue);
    getAudio().play();
  };

  //////////////////////////////
  // Wake
  //////////////////////////////
  let wakeValue = localStorage.getItem("wake");

  const processWake = () => wake.set(wakeValue);

  //////////////////////////////
  // Notes Template
  //////////////////////////////
  let templateValue = localStorage.getItem("template");

  const processTemplate = () => template.set(templateValue);
</script>

<nav>DEFINIÇÕES</nav>
<main>
  <!-- CHOICE COLOR SCHEME -->
  <Select
    id="scheme"
    bind:value={schemesValue}
    options={schemes}
    title="Tema"
    fun={processSchemes}
  />

  <!-- CHOICE SOUND -->
  <Select
    id="sound"
    bind:value={soundsValue}
    options={sounds}
    title="Efeitos Sonoros"
    fun={processSound}
  />

  <!-- CHOICE WAKE LOCK -->
  {#if "wakeLock" in navigator}
    <Select
      id="wake"
      bind:value={wakeValue}
      options={wakeModes}
      title="Ecrã"
      fun={processWake}
    />
  {/if}

  <!-- NOTES TEMPLATE -->
  <Field label="Notas">
    <Input modifier="textarea" bind:value={templateValue} placeholder="" />
    <Button primary on:click={processTemplate} icon={mdiCheck} />
  </Field>


  <hr />
  <br />

  <!-- BUTTONS -->
  <Button outline primary style="width:100%" on:click={() => open(motionFLink)}>
    Propor Moção
  </Button>

  <br /><br />

  <Button outline primary style="width:100%" on:click={() => open(bugFLink)}>
    Reportar Bug
  </Button>

  <br /><br />
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
</style>
