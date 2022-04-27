<script>
    export let patient;
</script>

{#if patient.gender == "male"}
    🤵
{:else}
    🙎‍♀️
{/if}