<script>
  import Play from "../icons/Play.svelte"
  import Pause from "../icons/Pause.svelte"
  import Btn from "../components/Btn.svelte"
  import { mdiRestart, mdiSwapHorizontal } from "@mdi/js";
  import { getAudio } from "../data/audio";

  let seconds = 0
  let isPrep = false
  let barColor = "var(--color-1-min)"
  let barLen = 100
  let playing = false
  let extraClass = ""

  const min1InSecs = 60                  // 1.00 min
  const min6InSecs = 60 * 6              // 6.00 min
  const min7InSecs = 60 * 7              // 7.00 min
  const min715InSecs = min7InSecs + 15   // 7.15 min
  const min15InSecs = 60 * 15            // 15.0 min

  let audioPlayer = getAudio()

  // Start/Stop the timer
  function switchOnOff(){
    playing = !playing

    // play on start
    if (seconds == 0) {
      audioPlayer.play()
    }
  }

  // Update the timer - speech version
  function speechTimer(){
    if (seconds <= min1InSecs){
      // 0 - 1 min
      // play audio at minute 1
      if (seconds === min1InSecs) {
        audioPlayer.play()
      }

      barColor = "var(--color-1-min)"

    } else if (seconds <= min6InSecs) {
      // 1 - 6 min
      // play audio at minute 6
      if (seconds === min6InSecs) {
        audioPlayer.play()
      }

      barColor = "var(--color-6-min)"

    } else if (seconds <= min7InSecs) {
      // 6 - 7 min
      // play audio at minute 7
      if (seconds === min7InSecs) {
        audioPlayer.play()
      }

      barColor = "var(--color-7-min)"

    } else if (seconds === min715InSecs){
      // end of speech
      // play audio -> change color -> start flicker
      audioPlayer.play()
      barColor = "var(--color-7-15-min)"
      extraClass = "flicker"

    }

    // Update the bar
    setBarLen()
  }

  // Update the timer - prep version
  function prepTimer(){
    if (seconds < min15InSecs) {
      // still prep
      barColor = "var(--color-1-min)"

    } else if (seconds === min15InSecs){
      // end of prep time
      // play audio -> change color -> start flicker
      audioPlayer.play()
      barColor = "var(--color-7-15-min)"
      extraClass = "flicker"
    }

    // Update the bar
    setBarLen(min15InSecs)
  }

  // Update the TimeBar length based on the remaining time
  function setBarLen(time = min7InSecs){
    // 0s   -> 100%
    // time -> 0%
    barLen = 100 -  (seconds * 100 / time)
  }

  // Reset the timer
  function reset(){
    barColor = "var(--color-1-min)"
    seconds = 0
    barLen = 100
    playing = false
    extraClass = ""
  }

  // Switch the type of timer (Prep Time / Seech time) 
  function switchTimerType(){
    reset()
    isPrep = !isPrep
  }

  // Increment and Update the Timer
  function increment(){
    if (!playing) {
      // Not playing -> Do nothing
      return
    }

    // Increment the timer
    seconds++

    if (isPrep) {
      prepTimer()
    } else {
      speechTimer()
    }
  }
  
  // Make the timer "tic" every second
  setInterval(increment, 1000)
</script>

<nav>TEMPORIZADOR</nav>
<!-- Remaining Time Bar -->
<div class="time-bar {extraClass}" style="background-color: {barColor}; width: {barLen}%"></div>
<main>
    <!-- Show Time -->
    <div class="clock">
      {Math.floor(seconds/60)}:{('0' + seconds%60).slice(-2)}
    </div>
  
    <!-- On/Off Btn-->
    <div on:click={switchOnOff}>
      {#if playing}
        <Pause/>
      {:else}
        <Play/>
      {/if}
    </div>
  
    <Btn icon={mdiSwapHorizontal} isLeft={true} func={switchTimerType}/>

    <div class="type">{isPrep ? "PREP TIME" : "DISCURSO"}</div>

    <!-- Reset the timer Btn-->
    <Btn icon={mdiRestart} func={reset}/>
</main>
  
<style>
  main {
    padding: 2rem;
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

  .type {
    position: absolute;
    bottom: 1.6rem;
    left: 50%;
    font-size: 2.5rem;
    transform: translate(-50%, 0);
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