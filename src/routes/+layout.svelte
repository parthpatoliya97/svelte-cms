<script>
	
	import Meta from '$lib/components/meta.svelte';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
</script>

<Meta />
<Header/>
<slot />
<Footer/>

