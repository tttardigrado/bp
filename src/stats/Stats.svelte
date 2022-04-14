<script lang="ts">
  import Heatmap from "./HeatMap.svelte";
  import { getStats } from "../data/stats";
  import Btn from "../components/Btn.svelte";
  import { mdiEye } from "@mdi/js";

  // Sum 2 arrays element by element
  const sum2 = (arr1: number[], arr2: number[]) => {
    let result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
      result[i] = arr1[i] + arr2[i];
    }

    return result;
  };

  // Sum 4 arrays element by element
  const sum4 = (
    arr1: number[],
    arr2: number[],
    arr3: number[],
    arr4: number[]
  ) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      result[i] = arr1[i] + arr2[i] + arr3[i] + arr4[i];
    }

    return result;
  };

  let [og, oo, cg, co] = getStats();

  let opening = sum2(og, oo);
  let closing = sum2(cg, co);
  let govs = sum2(og, cg);
  let opps = sum2(oo, co);
  let all = sum4(og, oo, cg, co);

  let vals = [og, oo, cg, co, opening, closing, govs, opps, all];

  // Handle (not) showing numbers
  let isToShow = true;

  const switchShow = () => (isToShow = !isToShow);
</script>

<main>
  <div class="center">
    <Heatmap {vals} {isToShow} />

    <Btn icon={mdiEye} func={switchShow} />
  </div>
</main>

<style>
  main {
    padding: 2rem;
    max-width: 700px;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center {
    margin: 2rem auto;
  }
</style>
