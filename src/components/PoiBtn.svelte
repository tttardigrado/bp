<script>
  import {Button} from "svelte-chota";
  ////////////////////
  // POI
  ////////////////////

  let isDuringPoi = false
  let poiText = "POI"
  let poiID = 0

function endPoiAt15() {
    poiText = "POI"
	isDuringPoi = false 
    window.navigator.vibrate(500);      
}

function endPoiEarly() {
    // Cancel the last 16 (15 seconds + endPoi) setTimeOut's
    for(let i = 0; i < 16; i++) {
        window.clearTimeout(poiID - i)
    }

    poiText = "POI"
    isDuringPoi = false
}

function startPoi() {
    // Start running
    isDuringPoi = true

    // Decrement every second
    for (let i = 0; i < 15; i++) {
        setTimeout(_ => poiText = `${15-i}`, i * 1000);
    }

    // Stop the poi timer after 15 secs
    // Get the id so that we are able to cancel it
    poiID = setTimeout(endPoiAt15, 15 * 1000)
}

function poi() {
    if (isDuringPoi) {
        // Already Running -> Stop
	    endPoiEarly()
    } else {
        // Not Running -> Start
      startPoi()
    }
}
</script>

<div class="btn mid" >
    <Button primary on:click={poi}>
        {poiText}
    </Button>
</div>

<style>
    .btn {
        position: fixed;
        bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 2rem;
    }

    .mid {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>