<script>
    export let link = ""
    export let text = ""
    export let tabs = 1
</script>

<div>
    <a href="{link}" target="_blank" style="--tabs: {3*tabs}rem">
        ⭢ {text}
    </a>
</div>


<style>
    a {
        padding-left: var(--tabs);
        text-decoration: none;
        color: var(--color-primary);
    }
</style>