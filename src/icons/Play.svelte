<script>
    export let color = "var(--color-primary)"
    export let style = "position: absolute; top: 70%; left: 50%; transform: translate(-50%, -50%) scale(3)"

</script>

<div class="icon" style={style}>
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="-2 0 24 24"
    >
        <path 
            d="M3 22v-20l18 10-18 10z"
            fill={color}
        />
    </svg>
</div>

<style>
    .icon {
        display: flex;
        padding: 1rem;
        border-radius: 50%;
        transition: 0.5s;
    }
    .icon:hover {
        opacity: 0.7;
    }
</style>
