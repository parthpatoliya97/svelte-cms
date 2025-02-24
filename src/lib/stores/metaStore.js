import { writable } from 'svelte/store';

export const metaTags = writable({
  metaTitle: "Default Title",
  metaDescription: "Default Description",
  type: "website"
});
