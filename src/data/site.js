export const site = {
  brand: "Englewood Pest Control",
  shortBrand: "Englewood Pest",
  domain: "englewoodnjpest.com",
  url: "https://englewoodnjpest.com",
  phone: "(201) 409-2540",
  phoneHref: "tel:+12014092540",
  phonePlain: "+1-201-409-2540",
  email: "info@englewoodnjpest.com",
  city: "Englewood",
  region: "NJ",
  regionName: "New Jersey",
  county: "Bergen County",
  centroid: { lat: 40.8929, lng: -73.9726 },
  zips: ["07631", "07632"],
};

export const hours = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
  { days: ["Saturday"], opens: "08:00", closes: "17:00" },
  { days: ["Sunday"], opens: "08:00", closes: "16:00" },
];

export const primaryServices = [
  { slug: "general-pest-control-in-englewood", label: "General Pest Control", icon: "shield" },
  { slug: "ant-extermination-in-englewood", label: "Ant Control", icon: "ant" },
  { slug: "rodent-extermination-in-englewood", label: "Rodent Control", icon: "rodent" },
  { slug: "termite-control-in-englewood", label: "Termite Control", icon: "termite" },
  { slug: "cockroach-extermination-in-englewood", label: "Cockroach Control", icon: "roach" },
  { slug: "stinging-insect-control-in-englewood", label: "Stinging Insect Control", icon: "wasp" },
  { slug: "mosquito-tick-control-in-englewood", label: "Mosquito & Tick Control", icon: "mosquito" },
  { slug: "bed-bug-extermination-in-englewood", label: "Bed Bug Treatment", icon: "bedbug" },
  { slug: "occasional-invader-control-in-englewood", label: "Stink Bug & Invader Control", icon: "stinkbug" },
];

export const heroPills = [
  { label: "Pest Control", icon: "shield", slug: "general-pest-control-in-englewood" },
  { label: "Rodent Control", icon: "rodent", slug: "rodent-extermination-in-englewood" },
  { label: "Termite Control", icon: "termite", slug: "termite-control-in-englewood" },
  { label: "Bed Bug Treatment", icon: "bedbug", slug: "bed-bug-extermination-in-englewood" },
];

export const pestStrip = [
  { label: "Ants", icon: "ant" },
  { label: "Rodents", icon: "rodent" },
  { label: "Cockroaches", icon: "roach" },
  { label: "Wasps", icon: "wasp" },
  { label: "Termites", icon: "termite" },
  { label: "Mosquitoes", icon: "mosquito" },
  { label: "Ticks", icon: "tick" },
  { label: "Bed Bugs", icon: "bedbug" },
  { label: "Stink Bugs", icon: "stinkbug" },
  { label: "Spiders", icon: "spider" },
];

export const footerAreas = [
  { slug: "pest-control-in-teaneck", name: "Teaneck" },
  { slug: "pest-control-in-fort-lee", name: "Fort Lee" },
  { slug: "pest-control-in-tenafly", name: "Tenafly" },
  { slug: "pest-control-in-bergenfield", name: "Bergenfield" },
  { slug: "pest-control-in-leonia", name: "Leonia" },
  { slug: "pest-control-in-hackensack", name: "Hackensack" },
];

export const navLinks = [
  {
    label: "Services",
    path: "/services/",
    children: [
      { label: "All Services", path: "/services/" },
      ...primaryServices.map((s) => ({ label: s.label, path: `/${s.slug}/` })),
    ],
  },
  {
    label: "Service Areas",
    path: "/pest-control-in-teaneck/",
    children: [
      { label: "Englewood", path: "/" },
      { label: "Teaneck", path: "/pest-control-in-teaneck/" },
      { label: "Fort Lee", path: "/pest-control-in-fort-lee/" },
      { label: "Tenafly", path: "/pest-control-in-tenafly/" },
      { label: "Bergenfield", path: "/pest-control-in-bergenfield/" },
      { label: "Leonia", path: "/pest-control-in-leonia/" },
      { label: "Hackensack", path: "/pest-control-in-hackensack/" },
    ],
  },
  { label: "Blog", path: "/blog/" },
  { label: "About", path: "/about-us/" },
  { label: "Contact", path: "/contact/" },
];
