// src/routes/blogs/+page.js
import blogsData from '$lib/data/blogs.json';

export function load() {
    const blogs = blogsData.blogs.data
        .sort((a, b) => new Date(b.date) - new Date(a.date))  // Sort by date in descending order
        .slice(0, 3);  // Get top 3 blogs

    return {
        blogs
    };
}
