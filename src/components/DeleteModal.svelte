<script>
    import { Modal, Card, Button } from "svelte-chota";
    
    export let func = () => {}
    export let modal_open = false;

    const modal_show = event => modal_open = true;
    const modal_hide = event => modal_open = false;

    function del(){
        func()
        modal_hide()
    }
</script>

<Modal bind:open={modal_open} style="background: none">
    <Card style="box-shadow: none;">
      <h4 slot="header">EC apagaria este debate</h4>
  
      <p>Tens a certeza?</p>
      
      <div slot="footer" class="is-right">
          <Button clear on:click={modal_hide}>Cancelar</Button>
          <Button error on:click={del}>Apagar</Button>
      </div>
    </Card>
</Modal>