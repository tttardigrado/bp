<script>
  import Link from "../components/Link.svelte";

  import { resources } from "../data/resources"
</script>

<nav>RECURSOS</nav>
<main>
  <!-- Every section -->
  {#each resources as {name, content}}
    <details><summary>{name}</summary>
      <!-- Every Link in each section -->
      {#each content as {link, text}}
        <Link {link} {text}/>
      {/each}
    </details>
  {/each}
</main>

<style>
  main {
    padding: 2rem;
    padding: 2rem;
    max-width: 700px;
    margin: auto;
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

  details {
    margin-bottom: 2rem;
  }
</style>
