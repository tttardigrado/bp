// Create an Audio Object based on the "audio" item in localStorage
export function getAudio(){
    return new Audio(
        `/audio/${localStorage.getItem("audio").toLowerCase()}.mp3`
    );
}
