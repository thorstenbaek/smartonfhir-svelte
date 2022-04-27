<script>
    export let patient;
</script>

<div>
    {#if patient.gender == "male"}
        🤵
    {:else}
        🙎‍♀️
    {/if}
</div>

<style>
    div {
        font-size: 6em;
    }
</style>