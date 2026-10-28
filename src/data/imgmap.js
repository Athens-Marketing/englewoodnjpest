// Free-license photos from Wikimedia Commons, self-hosted in public/images/ as webp.
// Credits live in src/data/photoCredits.js and on /photo-credits/.
export function imgUrl(name) {
  if (!name) return "";
  return `/images/${name.replace(/\.(jpe?g|png)$/i, ".webp")}`;
}
