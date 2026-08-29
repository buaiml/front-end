<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="/icon/favicon.ico" /></svelte:head>
<Navbar />
{@render children()}
