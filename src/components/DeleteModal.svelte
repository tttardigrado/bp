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
      <h4 slot="header">Delete this debate</h4>
  
      <p>Are you sure?</p>
      
      <div slot="footer" class="is-right">
          <Button clear on:click={modal_hide}>Cancel</Button>
          <Button error on:click={del}>Delete</Button>
      </div>
    </Card>
</Modal>