<script>
    // import Meta from '$lib/components/meta.svelte';

     import { metaTags as metaStore } from '$lib/stores/metaStore';  

     export let data
     const {hero,metaTags}=data
     
      metaStore.set(metaTags);
</script>

<!-- <Meta {metaTags}/> -->

<h1>{hero.title}</h1>
<h1>{hero.description}</h1>