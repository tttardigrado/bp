<script>
    import Heatmap from "./HeatMap.svelte"
    import { getStats } from "../data/stats"
    import Btn from "../components/Btn.svelte"
    import { mdiEye } from "@mdi/js"

    // Sum 2 arrays element by element
    function sum2(arr1, arr2) {
        let result = []
        for (let i = 0; i < arr1.length; i++){
            result[i] = arr1[i] + arr2[i]
        }

        return result
    }

    // Sum 4 arrays element by element
    function sum4(arr1, arr2, arr3, arr4) {
        let result = []
        for (let i = 0; i < arr1.length; i++){
            result[i] = arr1[i] + arr2[i] + arr3[i] + arr4[i]
        }

        return result
    }

    let [og, oo, cg, co] = getStats()

    let opening = sum2(og, oo)
    let closing = sum2(cg, co)
    let govs = sum2(og, cg)
    let opps = sum2(oo, co)
    let all = sum4(og, oo, cg, co)

    let vals = [
        og, oo, cg, co,
        closing, opening,
        govs, opps, all
    ]
    
    // Handle (not) showing numbers
    let isToShow = true

    function switchShow() {
        isToShow = !isToShow
    }
</script>

<nav>ESTATÍSTICAS</nav>
<main>
<div class="center">
    <Heatmap {vals} {isToShow}/>
    
    <Btn icon={mdiEye} func={switchShow}/>
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
  
  nav {
    background-color: var(--nav-color);
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
  }

  .center {
      margin: 2rem auto;
  }
</style>