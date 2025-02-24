export async function GET({fetch, setHeaders}) {
    setHeaders({
        'Content-Type': 'application/xml'
    });

    const site = 'http://localhost:5173/';
    const response = await fetch('/content/footer.json'); 

    if (!response.ok) {
        throw new Error('Failed to fetch footer links.');
    }

    const data = await response.json();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${site}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>

    ${data.footer.data.map(item => `
    <url>
        <loc>${item.link}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>
    `).join('')}

    ${data.footer.socialMediaLinks.map(item => `
    <url>
        <loc>${item.link}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    `).join('')}
</urlset>`;

    return new Response(sitemap);
}
