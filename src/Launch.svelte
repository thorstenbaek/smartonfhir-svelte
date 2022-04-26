<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {
        Smart.authorize({
			clientId: 'dips-simplest-smart-app',
			scope: 'launch openid profile patient/*.read user/id user/fhirUser',
			redirectUri: './app',			
			//iss:"https://vt-fi-a-mb.dips.local/DIPS-WebAPI/HL7/fhir-r4",
            iss:"https://vt-selecta-a.dips.local/DIPS-WebAPI/HL7/fhir-r4",
            launch: "cdp2008909::"
		});
    })
</script>