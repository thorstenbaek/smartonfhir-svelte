import { writable, derived } from "svelte/store";
import { oauth2 as Smart } from 'fhirclient';

export const fhir = writable(null);
export const user = derived(
    fhir, 
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null)
        {
            $fhir.client.user.read().then(u => set(u));
        }
   });

export const patient = derived(
    fhir,
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null)
        {
            $fhir.client.patient.read().then(p => set(p));            
        }
    }
);

export const encounter = derived(
    fhir,
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null)
        {
            $fhir.client.encounter.read().then(e => set(e));
        }
    }
)

export const resource = derived(
    fhir, 
    ($fhir, set) => {
        if ($fhir != null && $fhir.client != null)
        {
            var resourceId = $fhir.client.getState("tokenResponse.resource");
            $fhir.client.request(resourceId).then(
                resource => {
                    console.log(resource);
                    set(resource);
                });                       
        }
    }
)

Smart.ready()
    .then(client => {
        console.log(client);
        var newContext = {
            client: client,
            error: null
        };
        fhir.set(newContext);        
        })
        
    .catch(error => {
        var newContext = {
            client: null,
            error: error
        };
        fhir.set(newContext)});
