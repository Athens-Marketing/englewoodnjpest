import { site } from "../data/site.js";
import { services } from "../data/services.js";
import { areas } from "../data/areas.js";
import { posts } from "../data/blog.js";
export async function GET() {
  const urls = [
    "/", "/services/", "/blog/", "/about-us/", "/contact/", "/privacy-policy/",
    ...services.map((s) => `/${s.slug}/`),
    ...areas.map((a) => `/${a.slug}/`),
    ...posts.map((p) => `/blog/${p.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site.url}${u}</loc></url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
