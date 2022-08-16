<script>
  import { mdiBell, mdiRestart } from "@mdi/js";

  import Play from "../icons/Play.svelte";
  import Pause from "../icons/Pause.svelte";
  import Btn from "../components/Btn.svelte";
  import PoiBtn from "../components/PoiBtn.svelte";

  import { getAudio } from "../data/audio";

  ////////////////////
  // No Sleep
  ////////////////////

  import { noSleep } from "../data/wake";
  let wakeLock = null

  ////////////////////
  // Time
  ////////////////////

  let seconds = 0;
  let barColor = "var(--color-1-min)";
  let barLen = 100;
  let playing = false;
  let extraClass = "";

  const min1InSecs = 60; // 1.00 min
  const min6InSecs = 60 * 6; // 6.00 min
  const min7InSecs = 60 * 7; // 7.00 min
  const min715InSecs = min7InSecs + 15; // 7.15 min

  let audioPlayer = getAudio();

  function play(n = 1) {
    // Play Audio
    audioPlayer.play()

    // Play  n times
    // prev + n-1 times with a 0.5s interval
    for (let i = 1; i < n; i++){
      setTimeout(() => {
        audioPlayer.currentTime = 0
      }, i * 700)
    }
  }

  // Start/Stop the timer
  function switchOnOff() {
    playing = !playing
  }

  // Update the timer - speech version
  function speechTimer() {
    if (seconds <= min1InSecs) {
      // 0 - 1 min
      // play audio at minute 1
      if (seconds === min1InSecs) {
        play(1);
      }

      barColor = "var(--color-1-min)";
    } else if (seconds <= min6InSecs) {
      // 1 - 6 min
      // play audio at minute 6
      if (seconds === min6InSecs) {
        play(1)
      }

      barColor = "var(--color-6-min)";
    } else if (seconds <= min7InSecs) {
      // 6 - 7 min
      // play audio at minute 7
      if (seconds === min7InSecs) {
        play(2);
      }

      barColor = "var(--color-7-min)";
    } else if (seconds === min715InSecs) {
      // end of speech
      // play audio -> change color -> start flicker
      play(3);
      barColor = "var(--color-7-15-min)";
      extraClass = "flicker";
    }

    // Update the bar
    setBarLen();
  }

  // Update the TimeBar length based on the remaining time
  function setBarLen(time = min7InSecs) {
    // 0s   -> 100%
    // time -> 0%
    barLen = 100 - (seconds * 100) / time;
  }

  // Reset the timer
  function reset() {
    barColor = "var(--color-1-min)";
    seconds = 0;
    barLen = 100;
    playing = false;
    extraClass = "";
  }

  // Increment and Update the Timer
  function increment() {
    if (!playing) {
      // Not playing -> Do nothing
      return;
    }

    // Increment the timer
    seconds++;

    // keep screen awake
    if (wakeLock === null){
      wakeLock = noSleep()
    }

    speechTimer()
  }

  // Make the timer "tic" every second
  setInterval(increment, 1000);
</script>

<nav>TEMPORIZADOR</nav>
<!-- Remaining Time Bar -->
<div
  class="time-bar {extraClass}"
  style="background-color: {barColor}; width: {barLen}%"
/>
<main>
  <!-- Show Time -->
  <div class="clock">
    {Math.floor(seconds / 60)}:{("0" + (seconds % 60)).slice(-2)}
  </div>

  <!-- On/Off Btn-->
  <div on:click={switchOnOff}>
    {#if playing}
      <Pause />
    {:else}
      <Play />
    {/if}
  </div>


  <!-- Reset the timer Btn-->
  <Btn icon={mdiBell} func={() => play(1)} isLeft={true} />

  <PoiBtn/>

  <!-- Reset the timer Btn-->
  <Btn icon={mdiRestart} func={reset} />
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
