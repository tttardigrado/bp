<script>
    import Link from "../components/Link.svelte"    
</script>
  
<nav>RECURSOS</nav>
<main>
  <details><summary>Manuais de Debates</summary>
    <Link link="https://drive.google.com/file/d/1hRD5dTkda9GjPFusJn-jQxsFPPaCZJpl/view?usp=sharing" text="Debater Handbook"/>
    <Link link="https://drive.google.com/file/d/1l7i3Jttb6oIqeU91rCUOcRX5vxarSTzs/view?usp=sharing" text="Manual de Debates SdDUFC"/>
    <Link link="https://drive.google.com/file/d/1rg9gNHM9-oFDmRPToiX0f5vlVIZP6gXz/view?usp=sharing" text="WUDC Judging Manual"/>
  </details>

  
  <details><summary>Formações - PT</summary>
    <Link link="https://www.youtube.com/watch?v=qn6B0_5PyRM" text="Impactos"/>
    <Link link="https://www.youtube.com/watch?v=POZGeXsdQiE" text="Geopolítica"/>
    <Link link="https://www.youtube.com/watch?v=rariyP7Yzn4" text="Adjudicação"/>
  </details>

  <details><summary>Formações - EN</summary>
    <Link link="https://www.youtube.com/watch?v=qHX-PZQe2QQ" text="Burdens of Proof"/>
    <Link link="https://www.youtube.com/watch?v=lIgxr1GzXDU" text="Stop sucking at principles"/>

    <br>

    <Link link="https://www.youtube.com/channel/UC1Cdkqn2WrTxLaLfmo_YxUA" text="European debate training platform"/>
    <Link link="https://www.youtube.com/channel/UCbx6dh3PTCY3q4TqIaXHfpQ" text="Astana debate union"/>
    <Link link="https://www.youtube.com/c/ManchesterDebatingUnion" text="Manchester debating union"/>
  </details>

  <details><summary>Debates</summary>
    <Link link="https://www.youtube.com/watch?v=tngaDNSlCpU" text="THBT the world's poor would be justified in pursuing complete Marxist revolution."/>
    <Link link="https://www.youtube.com/watch?v=RMEEZGoUmvI" text="THS Iran's extension of the Sharia principle of 'an eye for an eye' to the victims of acid attacks."/>
    <Link link="https://www.youtube.com/watch?v=3WX-4i9FqvE" text="THBT governments should abandon the strategy of 'decapitation' in fighting terrorism."/>
  </details>
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
  