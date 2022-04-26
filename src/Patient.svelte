<script>
    import {patient} from "./SmartOnFhirStore";
    import Gender from "./Gender.svelte";
</script>

{#if $patient}
    <div class="banner">        
        <div class="a name">{$patient.name[0].given[0]} {$patient.name[0].family}</div>
        <div class="b">
            <div>{$patient.address[0].line[0]}</div>
            <div>{$patient.address[0].postalCode} {$patient.address[0].district}</div>
        </div>
        <div class="c"><Gender gender={$patient.gender}/></div>
        <!-- <pre>{JSON.stringify($patient, null, 2)}</pre> -->
    </div>
{/if}

<style>
    .banner {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 4em 10em;
        grid-template-rows: 2em 2em;
        background-color: #fff;
        color: #333333;        
    }

    .name {
        font-size: 1.5em;
        font-weight: bold;
    }

    .a {
        grid-column: 2 / span 2;
    }

    .b {
        grid-column: 2 / span 2;
        grid-row: 2;
    }

    .c {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2
    }
</style>