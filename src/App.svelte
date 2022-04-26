<script>
	import {Router, Route} from "svelte-routing";	
	import Launch from './Launch.svelte';
	import Home from "./Home.svelte";

	export let url;
</script>

<Router url="{url}">
	<Route path="/">
		<Launch/>
	</Route>
	<Route path="/app">
		<Home/>
	</Route>
</Router>

