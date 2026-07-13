import { site, hours, primaryServices } from "../data/site.js";

const dayMap = {
  Monday: "Monday", Tuesday: "Tuesday", Wednesday: "Wednesday",
  Thursday: "Thursday", Friday: "Friday", Saturday: "Saturday", Sunday: "Sunday",
};

export function orgNode() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://www.productontology.org/id/Pest_control",
    "@id": `${site.url}/#business`,
    name: site.brand,
    url: `${site.url}/`,
    telephone: site.phonePlain,
    email: site.email,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: site.centroid.lat, longitude: site.centroid.lng },
      geoRadius: 22000,
    },
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: site.centroid.lat, longitude: site.centroid.lng },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => dayMap[d]),
      opens: h.opens, closes: h.closes,
    })),
    priceRange: "$$",
  };
}

export function websiteNode() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.brand,
    publisher: { "@id": `${site.url}/#business` },
  };
}

export function serviceNode({ name, description, path, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name, description, serviceType: serviceType || name,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: `${site.city}, ${site.region}` },
    url: `${site.url}${path}`,
  };
}

export function articleNode({ headline, description, path, datePublished }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline, description,
    author: { "@type": "Organization", name: site.brand },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}${path}`,
    datePublished: datePublished || "2025-01-01",
  };
}

export function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.name,
      item: it.path ? `${site.url}${it.path}` : undefined,
    })),
  };
}

export function faqNode(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function itemListNode(list) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: list.map((s, i) => ({
      "@type": "ListItem", position: i + 1, name: s.label, url: `${site.url}/${s.slug}/`,
    })),
  };
}
