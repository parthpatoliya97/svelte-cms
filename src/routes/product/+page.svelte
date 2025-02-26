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
    <li>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img src={import.meta.env.VITE_BASE_URL + product.image} alt="{product.title} image" loading="lazy">

        <a class="text-blue-800" href={`/product/${product.ctaLink}`}>{product.ctaText}</a>
    </li>    
    {/each}
</ul>