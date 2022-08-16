export function noSleep() {
    let wakeLock = null;

    async function getWake() {
        try {
            wakeLock = await navigator.wakeLock.request("screen");
        } catch (err) {
            wakeLock = null;
        }
    }

    getWake()

    return wakeLock
}