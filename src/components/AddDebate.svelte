<script>
    import {Button, Card, Field, Input} from "svelte-chota";
    import Select from "./Select.svelte";

    const houseOptions = [
        "Opening Gov",
        "Opening Opp",
        "Closing Gov",
        "Closing Opp"
    ]


</script>
<Card style="box-shadow: none; padding-top: 2rem; padding-bottom: 1rem">
    <Field label="Motion">
        <Input value="Motion"/>
    </Field>

    <Select title="House" options={houseOptions}></Select>
    
</Card>