<script>
  import { onDestroy } from 'svelte';
  import { Field, Button} from "svelte-chota";
  import { mdiTrashCan, mdiCheck } from "@mdi/js";
  import Input from "../components/Input.svelte";
  import Select from "../components/Select.svelte";
  import DeleteModal from "../components/DeleteModal.svelte";

  export let onExit = () => {}
  export let deleteDebate = () => {}

  const houseOptions = [
      "1º Governo",
      "1ª Oposição",
      "2º Governo",
      "2ª Oposição"
  ]

  // Default data
  export let data = {
    index: 0,
    house: houseOptions[0],
    call: [0, 0, 0, 0],
    motion: "ECA",
    notes: "",
  }

  // Handle a press on the Call box
  function changeCall(house) {
    data.call[house] = data.call[house] % 4 + 1 
  }

  let modal_open = false;
  const modal_show = event => modal_open = true;

  onDestroy(() => onExit(false));
</script>


<nav>DEBATES</nav>
<main>
    <!-- Motion Input Box -->
    <Field label="Moção">
        <Input 
          modifier="textarea"
          rows={1}
          bind:value={data.motion} 
          placeholder="Moção"
        />
    </Field>
    <!-- Motion Input Box -->
    <Field label="Info Slide">
      <Input
        modifier="textarea" 
        rows={1}
        bind:value={data.infoslide} 
        placeholder="Info Slide"
      />
  </Field>

    <!-- House Selection Box -->
    <Select 
      title="Casa" 
      bind:value={data.house} 
      options={houseOptions}
    />

    <br><hr><br>

    <!-- Debate Notes Input -->
    <Field label="Notas">
        <Input 
          modifier="textarea" 
          bind:value={data.notes} 
          placeholder=""
        />
    </Field>

    <br><hr><br>

    <!-- Call Box -->
    <!-- TODO: Export to a new Component -->
    <Field label="Call">
      <div class="call">

        <div class="call2">
          <Button primary on:click={() => {changeCall(0)}}>
            {data.call[0]} <!-- OG -->
          </Button>
          <Button primary on:click={() => {changeCall(1)}}>
            {data.call[1]} <!-- OO -->
          </Button>
        </div>

        <div class="call2">
          <Button primary on:click={() => {changeCall(2)}}>
            {data.call[2]} <!-- CG -->
          </Button>
          <Button primary on:click={() => {changeCall(3)}}>
            {data.call[3]} <!-- CO -->
          </Button>
        </div>
        
      </div>
    </Field>

    <br><hr><br>

    <div class="btns">
        <!-- Delete Btn (open the delete modal) -->
        <Button error 
          icon={mdiTrashCan} 
          on:click={modal_show}
        />
        <!-- Exit && Save Btn -->
        <Button success 
          icon={mdiCheck} 
          on:click={() => onExit(true)}
        />
    </div>
</main>

<DeleteModal bind:modal_open func={deleteDebate}/>
  
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

  .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .call {
    border-radius: 6px;
    border: 1px solid var(--bg-secondary-color);
    width:100%;
    background-color: var(--bg-secondary-color);
    transition: border 0.3s;
    padding: 2rem 2rem 0rem 2rem;

  }

  .call:hover{
    border: 1px solid var(--color-grey);
  }

  .call2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding-bottom: 1rem;
  }
</style>