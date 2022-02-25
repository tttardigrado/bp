<script>
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

    export let data = {
      index: 0,
      house: houseOptions[0],
      call: [1,2,3,4],
      motion: "THB",
      notes: "",
    }

    function changeCall(house) {
      data.call[house] = data.call[house] % 4 + 1 
    }

    let modal_open = false;
    const modal_show = event => modal_open = true;
</script>


<nav>DEBATES</nav>
<main>
    <Field label="Moção">
        <Input 
          bind:value={data.motion} 
          placeholder="Motion"
        />
    </Field>

    <Select 
      title="Casa" 
      bind:value={data.house} 
      options={houseOptions}
    />

    <br><hr><br>

    <Field label="Notas">
        <Input 
          modifier="textarea" 
          bind:value={data.notes} 
          placeholder=""
        />
    </Field>

    <br><hr><br>

    <Field label="Call">
      <div class="call">

        <div class="call2">
          <Button primary on:click={() => {changeCall(0)}}>
            {data.call[0]}
          </Button>
          <Button primary on:click={() => {changeCall(1)}}>
            {data.call[1]}
          </Button>
        </div>

        <div class="call2">
          <Button primary on:click={() => {changeCall(2)}}>
            {data.call[2]}
          </Button>
          <Button primary on:click={() => {changeCall(3)}}>
            {data.call[3]}
          </Button>
        </div>
        
      </div>
    </Field>

    <br><hr><br>

    <div class="btns">
        <Button error 
          icon={mdiTrashCan} 
          on:click={modal_show}
        />
        <Button success 
          icon={mdiCheck} 
          on:click={onExit}
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
    border: 1px solid var(--color-darkGrey);
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