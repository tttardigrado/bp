<script>
    import "chota";
  
    import Draw from "./pages/Draw.svelte";
    import Timer from "./pages/Timer.svelte";
    import Nav from "./components/Nav.svelte"
    import Select from "./components/Select.svelte";
  
    let schemes = [
      "Nord", "GruvBox", "TokyoNight", "SpaceGray", "Bear", "OneDark", "Dracula", "PaleNight"
    ]
    let schemesValue = "Nord"
  
    function processSchemes(){
      
    }
  
    let sounds = [
      "Bell", "Gong", "Coin"
    ]
    let soundsValue = "Bell"
  </script>
  
  <Nav></Nav>
  <nav>Settings</nav>
  <main>
  
    <Select id="scheme" bind:value={schemesValue} options={schemes} title="Color Schemes"/>
  
    <Select id="sound" bind:value={soundsValue} options={sounds} title="Sound effects"/>
  
    <div class="credits">
      Made by: <a href="http://" target="_blank"> Gonçalo Teixeira</a>
    </div>
    
  
  </main>
    
  <style>
    main {
      padding: 2rem;
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
  
    
  
    .credits {
      position: absolute;
      bottom: 1rem;
    }
  </style>
  