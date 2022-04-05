<script>
    import { Field, Button} from "svelte-chota"   
    import Input from "../components/Input.svelte"
    import { mdiMinus, mdiPlus } from "@mdi/js" 

    let teams = 4
    function plusTeams() {
      teams += 4
    }
    function minusTeams() {
      teams -= 4
      if (teams < 0) {
        teams = 0
      }
    }

    let rounds = 5
    function plusRound() {
      rounds++
    }
    function minusRound() {
      rounds--

      if (rounds < 0) {
        rounds = 0
      }
    }
</script>
  
<nav>Calculadora</nav>
<main>
    <Field gapless>
        <Button icon={mdiMinus} primary/>
        <span> {teams} </span>
        <Button icon={mdiPlus} primary/>
    </Field>

    <Field gapless>
        <Button icon={mdiMinus} primary/>
        <Input placeholder="Rounds"/>
        <Button icon={mdiPlus} primary/>
    </Field>

    <Field gapless>
        <Button icon={mdiMinus} primary/>
        <Input placeholder="Breaking Teams"/>
        <Button icon={mdiPlus} primary/>
    </Field>
  
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
  