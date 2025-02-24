<script>
    // import Meta from '$lib/components/meta.svelte';

     import { metaTags as metaStore } from '$lib/stores/metaStore';

    export let data
    const {products,metaTags}=data
    
    metaStore.set(metaTags);
</script>

<!-- <Meta {metaTags}/> -->
<ul>
    {#each products as product }
    <li>{product.title}</li>
    <li>{product.description}</li>
    <a class="text-blue-800" href={`/product/${product.ctaLink}`}>{product.ctaText}</a>    
    {/each}
</ul>