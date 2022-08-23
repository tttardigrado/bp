<script>
  import { mdiShuffleVariant, mdiScaleBalance } from "@mdi/js";
  import { Modal } from "svelte-chota";
  import DrawBox from "../components/DrawBox.svelte";
  import DebaterInput from "../components/DebaterInput.svelte";
  import Btn from "../components/Btn.svelte";

  let modal_open = false;
  const modal_show = (event) => (modal_open = true);
  const modal_hide = (event) => (modal_open = false);

  // CATEGORY OF A DEBATER
  const AM = 0; // AMATUR (less than 1 year)
  const PRO = 1; // PROFESSIONAL (more than 1 year)

  let state = {
    debaters: [],
    cat: [], // PRO | AM | INDEF
    draw: [
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
    ],
  };

  // INIT the state object
  // every debater's name is set to "Debater i"
  // every debater's category is set to indef
  for (let i = 0; i < 8; i++) {
    state.debaters.push(`Debater ${i + 1}`);
    state.cat.push(AM);
  }

  // Separate the debater into 3 categories PRO | AM | INDEF
  const separate = () => {
    let pro = [];
    let am = [];

    // For every debater add it to it's respective category
    for (let i = 0; i < 8; i++) {
      switch (state.cat[i]) {
        case AM:
          am.push(state.debaters[i]);
          break;
        case PRO:
          pro.push(state.debaters[i]);
          break;
      }
    }

    return [am, pro];
  };

  const match = (main, alt) => {
    let matched = [];
    while (main.length != 0) {
      if (alt.length != 0) {
        matched.push([main.pop(), alt.pop()]);
      } else {
        matched.push([main.pop(), main.pop()]);
      }
    }
    return matched;
  };

  // Shuffle a give array
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  const giveDrawBalance = () => {
    // separate the debater into 3 categories
    let [am, pro] = separate();

    // Shuffle each category
    shuffle(am);
    shuffle(pro);

    // Try to match PRO-AM
    let matchedPro = match(pro, am);
    // Try to match AM-INDEF
    let matchedAM = match(am, pro);

    // Concat the 3 matches into a single teams array
    state.draw = matchedPro.concat(matchedAM);

    shuffle(state.draw);

    modal_show();
  };

  const giveDrawPair = () => {
    // separate the debaters into 4 teams
    state.draw = [
      [state.debaters[0], state.debaters[1]],
      [state.debaters[2], state.debaters[3]],
      [state.debaters[4], state.debaters[5]],
      [state.debaters[6], state.debaters[7]],
    ];

    shuffle(state.draw);

    modal_show();
  };
</script>

<nav>DRAW</nav>
<main>
  {#each state.debaters as s, i}
    <DebaterInput debaterNum={i + 1} bind:cat={state.cat[i]} bind:name={s} />
  {/each}

  <Btn icon={mdiShuffleVariant} func={giveDrawPair} />
  <Btn icon={mdiScaleBalance} func={giveDrawBalance} isLeft={true} />

  <Modal bind:open={modal_open} style="padding: 5rem; background: none;">
    <DrawBox {state} />
  </Modal>
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
</style>

