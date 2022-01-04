<script>
    export let title = "1º Governo";
    export let field1 = "";
    export let field2 = "";
</script>

<span class="title">{title}</span>
<div class="container">
    <span class="field">{field1}</span>
    <span class="field">{field2}</span>
</div>

<style>
    .container {
        background-color: var(--bg-secondary-color);
        border: 1px solid var(--bg-secondary-color);
        padding: 8px 10px;
        margin-bottom: 16px;
        margin-top: 8px;
        border-radius: 4px;
        line-height: normal;
        display: flex;
        justify-content:space-between;
    }

    .field {
        width: 50%;
    }
</style>