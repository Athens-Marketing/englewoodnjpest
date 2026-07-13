const P = "upload.wikimedia.org/wikipedia/commons/";
const wsv = (path, w) => `https://images.weserv.nl/?url=${P}${path}&w=${w}&output=webp&q=82`;

const F = {
  hero: "5/55/Liberty_Square%2C_Englewood%2C_New_Jersey.jpg",
  residential: "e/e1/Birchwood_Knole%2C_Tenafly%2C_New_Jersey.png",
  commercial: "f/f8/Hackensack%2C_New_Jersey_-_6880309040.jpg",
  street: "f/f1/Bergen_County%2C_New_Jersey_-_10483852243.jpg",
  county: "e/e4/Bergen_County%2C_New_Jersey_-_6580859625.jpg",
  autumn: "f/f9/2014-10-30_09_23_07_Suburban_area_along_Terrace_Boulevard_during_autumn_leaf_coloration_in_Ewing%2C_New_Jersey.JPG",
  station: "7/77/Tenafly_Station.jpg",
  ant: "5/50/Tapinoma_sessile_casent0005329_profile_1.jpg",
  rodent: "0/01/Rattus_norvegicus_1.jpg",
  roach: "4/4e/German_cockroach.jpg",
  wasp: "5/59/Vespula_germanica_Richard_Bartz.jpg",
  termite: "1/1e/Reticulitermes_banyulensis_crop.jpg",
  mosquito: "2/2c/Aedes_aegypti_CDC-Gathany.jpg",
  tick: "3/34/Adult_deer_tick.jpg",
  bedbug: "8/87/Bed_bug%2C_Cimex_lectularius.jpg",
  stinkbug: "5/54/Brown_marmorated_stink_bug.jpg",
  spider: "f/f1/Latrodectus_mactans.jpg",
};

export const imgMap = {
  // scenery
  "hero.jpg": wsv(F.hero, 1600),
  "residential.jpg": wsv(F.residential, 1100),
  "commercial.jpg": wsv(F.commercial, 1100),
  "street.jpg": wsv(F.street, 1200),
  "county.jpg": wsv(F.county, 1200),
  "autumn.jpg": wsv(F.autumn, 1200),
  "station.jpg": wsv(F.station, 1100),
  // service cards
  "general-pest.jpg": wsv(F.autumn, 1000),
  "ant-control.jpg": wsv(F.ant, 1000),
  "rodent-control.jpg": wsv(F.rodent, 1000),
  "termite-control.jpg": wsv(F.termite, 1000),
  "cockroach-control.jpg": wsv(F.roach, 1000),
  "stinging-insect.jpg": wsv(F.wasp, 1000),
  "mosquito-tick.jpg": wsv(F.mosquito, 1000),
  "bed-bug.jpg": wsv(F.bedbug, 1000),
  "occasional-invader.jpg": wsv(F.stinkbug, 1000),
  // blog
  "blog-stinging.jpg": wsv(F.wasp, 1000),
  "blog-ants.jpg": wsv(F.ant, 1000),
  "blog-termite.jpg": wsv(F.termite, 1000),
  "blog-rodent.jpg": wsv(F.rodent, 1000),
  "blog-stinkbug.jpg": wsv(F.stinkbug, 1000),
  "blog-tick.jpg": wsv(F.tick, 1000),
  "blog-bedbug.jpg": wsv(F.bedbug, 1000),
  "blog-choose.jpg": wsv(F.commercial, 1000),
};

export function imgUrl(name) {
  return imgMap[name] || `/images/${name}`;
}
