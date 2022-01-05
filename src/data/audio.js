export function getAudio(){
    return new Audio(
        `/audio/${localStorage.getItem("audio").toLowerCase()}.mp3`
    );
}
