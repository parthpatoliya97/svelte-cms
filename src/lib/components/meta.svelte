<!-- <script>
    import { page } from "$app/stores";
    export let metaTags
    const {metaTitle, metaDescription,type} = metaTags;
    $: url = $page.url.href;
 </script>
 
 <svelte:head>
     <meta property="og:title" content={metaTitle}>
     <meta property="og:description" content={metaDescription}>

     {@html <script type="application/ld+json">
 
     {
         "@context": "http://schema.org",
         "@type": "${type}",
           "name": "${metaTitle}",
           "description": "${metaDescription}",
           "url": "${url}",
         }
       </script>}
 </svelte:head> -->








<script>
    import { metaTags } from '$lib/stores/metaStore';
    import { page } from '$app/stores';
    import { onDestroy } from 'svelte';
  
    let metaTitle = "Default Title";
    let metaDescription = "Default Description";
    let type = "website";
    let url = "";
  
  
    const unsubscribe = metaTags.subscribe(value => {
      metaTitle = value.metaTitle;
      metaDescription = value.metaDescription;
      type = value.type;
    });
  
    $: url = $page.url.href;
  
    onDestroy(() => {
      unsubscribe();
    });
  </script>
  
  <svelte:head>
    <!-- Meta Tags for SEO -->
    <title>{metaTitle}</title>
    <meta name="description" content={metaDescription}>
    <meta property="og:title" content={metaTitle}>
    <meta property="og:description" content={metaDescription}>
    <meta property="og:type" content={type}>
    <meta property="og:url" content={url}>
  
    <!-- Structured Data -->
    {@html `<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "${type}",
        "name": "${metaTitle}",
        "description": "${metaDescription}",
        "url": "${url}"
    }
    </script>`}
  </svelte:head>
  