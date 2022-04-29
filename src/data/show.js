export const show = (msg, color) => {
    // Get #notify
    let notify = document.getElementById("notify")

    // Change properties
    notify.innerText = msg
    notify.style.color = `var(--color-${color})`
    notify.style.opacity = "100%"

    // after 2s start to fade
    setTimeout(() => {
      notify.style.opacity = "0%"
    }, 2000);
}