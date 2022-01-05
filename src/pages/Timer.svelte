<script>
    import Play from "../icons/Play.svelte"
    import Pause from "../icons/Pause.svelte"
    import Btn from "../components/Btn.svelte"
  
    import { mdiAutorenew } from "@mdi/js";

    import { getAudio } from "../data/audio";
  
    const min1InSecs = 60
    const min6InSecs = 60 * 6
    const min7InSecs = 60 * 7
    const min715InSecs = min7InSecs + 15

    let audioPlayer = getAudio()
  
    let seconds = 0
    let barColor = "var(--color-1-min)"
    let barLen = 100
    let playing = false
    let extraClass = ""
  
    function switchOnOff(){
      playing = !playing
    }
  
    function setBarLen(){
      barLen = 100 -  (seconds * 100 / min7InSecs)
    }
  
    function reset(){
      barColor = "var(--color-1-min)"
      seconds = 0
      barLen = 100
      playing = false
      extraClass = ""
    }
  
    function increment(){
      if (!playing) {
        return
      }
  
      seconds++
  
      if (seconds <= min1InSecs){
        if (seconds === min1InSecs) {
          audioPlayer.play()
        }
        barColor = "var(--color-1-min)"
      } else if (seconds <= min6InSecs) {
        if (seconds === min6InSecs) {
          audioPlayer.play()
        }
        barColor = "var(--color-6-min)"
      } else if (seconds <= min7InSecs) {
        if (seconds === min7InSecs) {
          audioPlayer.play()
        }
        barColor = "var(--color-7-min)"
      } else if (seconds === min715InSecs){
        audioPlayer.play()
        barColor = "var(--color-7-15-min)"
        extraClass = "flicker"
      }
  
      setBarLen()
    }
    
    setInterval(increment, 1000)

    
  
</script>

<nav>TIMER</nav>
<div class="time-bar {extraClass}" style="background-color: {barColor}; width: {barLen}%"></div>
<main>
    <div class="clock">
      {Math.floor(seconds/60)}:{('0' + seconds%60).slice(-2)}
    </div>
  
    <div on:click={switchOnOff}>
      {#if playing}
        <Pause/>
      {:else}
        <Play/>
      {/if}
    </div>
  
    <Btn icon={mdiAutorenew} func={reset}/>
</main>
  
<style>
    main {
      padding: 2rem;
    }
  
    .time-bar {
      height: 1rem;
    }
  
    .clock {
      font-size: 12rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      user-select: none;
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

    .flicker {
      animation: animate 1.5s linear infinite;
      width: 100% !important;
    }

    @keyframes animate {
            0% {
                opacity: 0;
            }
  
            50% {
                opacity: 0.7;
            }
  
            100% {
                opacity: 0;
            }
        }
</style>  