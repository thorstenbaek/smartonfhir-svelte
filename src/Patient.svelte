<script>
    import Gender from "./Gender.svelte";
    export var patient;
</script>

{#if patient}
<div class="name">
    {patient.name[0].given[0]} {patient.name[0].family}    
</div>
<div class="born">
    {new Date(patient.birthDate).toLocaleDateString("nb-NO")}
</div>

<Gender {patient}/>

{/if}

<style>
    .name {
        font-weight: bold;
    }

    .born {
        font-style: italic;
        color: darkred;
    }
</style>
