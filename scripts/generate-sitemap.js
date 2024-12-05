import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

export async function generateSitemap() {
  // List of URLs in your application
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/privacidad', changefreq: 'monthly', priority: 0.3 },
    { url: '/terminos', changefreq: 'monthly', priority: 0.3 }
  ];

  try {
    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: 'https://tuhistoriaennumeros.com'
    });

    // Return a promise that resolves with your XML string
    const sitemap = await streamToPromise(Readable.from(urls).pipe(stream));
    
    // Write the XML to file
    writeFileSync(
      resolve(process.cwd(), 'dist', 'sitemap.xml'),
      sitemap.toString()
    );

    console.log('✅ Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}