<script>
  export let title = ""
</script>

<nav>{title}</nav>
<main>
  <p>Desculpa, a CA team está a testar esta página!</p>
  <p><strong>ECA</strong> que ela estará a funcionar brevemente!</p>
</main>
  
<style>
  main {
    padding: 2rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.8rem;
    width: 100%;
    transform: translate(-50%, -50%);
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
</style>