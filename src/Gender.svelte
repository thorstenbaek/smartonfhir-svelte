<script>
    export let gender;
</script>

{#if gender=="female"}
    <div class="symbol">♀</div>
{:else}
    <div class="symbol">♂</div>
{/if}

<style>
    .symbol {
        font-size: 3em;
        font-weight: bold;
        text-align: center;
    }
</style>