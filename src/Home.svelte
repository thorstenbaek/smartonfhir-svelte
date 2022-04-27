<script>
    import {patient} from "./SmartOnFhirStore";
    import Patient from "./Patient.svelte";
</script>

<!-- {JSON.stringify($patient)} -->

<Patient patient={$patient}/>


