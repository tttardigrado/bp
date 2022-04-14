<script lang="ts">
  import Cell from "./Cell.svelte";
  import TopRow from "./TopRow.svelte";

  export let isToShow = true;

  export let labels = ["OG", "OO", "CG", "CO", "O", "C", "Gov", "Op", "All"];

  export let vals = [[0]];

  // Get the Maximum value from a nested array
  const getMax = (val: number[][]): number => {
    return Math.max.apply(null, val.flat(1));
  };

  // Maximum value, used for the opacity
  let max = getMax(vals);

  const getOpacity = (val: number) => {
    if (max == 0) {
      return 0;
    }

    return val / max;
  };
</script>

<TopRow />
{#each vals as val, i}
  <div class="row">
    <Cell label={labels[i]} percentage={1} />
    {#each val as v}
      <Cell label={v} percentage={getOpacity(v)} {isToShow} />
    {/each}
  </div>
{/each}
