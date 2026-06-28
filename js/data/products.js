/**
 * products.js — SnoopyDopy Product Reviews
 *
 * Product catalogue with reviews. Add, edit, or remove items here.
 *
 * Each product object accepts:
 * ┌──────────────┬────────────────────────────────────────────────────┐
 * │ Field        │ Description                                        │
 * ├──────────────┼────────────────────────────────────────────────────┤
 * │ id           │ Unique string identifier, e.g. "p01"               │
 * │ owner        │ "me" (orange theme) or "gf" (violet theme)         │
 * │ name         │ Product display name                               │
 * │ price        │ Number — price in COP (Colombian pesos)            │
 * │              │ USD equivalent is calculated automatically         │
 * │ rating       │ Number 1–5 — overall star rating                   │
 * │ description  │ Short product description (1–2 sentences)          │
 * │ reviews      │ Array of review objects:                           │
 * │              │   { author, text, stars, helpful }                 │
 * │ image        │ URL or path — single photo                         │
 * │ images       │ (optional) Array of URLs — multi-photo gallery     │
 * └──────────────┴────────────────────────────────────────────────────┘
 */

export const PRODUCTS = [
  // ── Neptual's Products (orange theme) ────────────────────
  {
    id: "p01",
    owner: "me",
    name: "INFINI OUD — MAISON ALHAMBRA",
    price: 228423,
    rating: 5,
    description: "Unisex. A rich and smoky oud fragrance with deep woody undertones and a warm, lingering finish.",
    reviews: [
        {
          author: "Neptual",   // your name
          stars: 5,            // 1 to 5
          text: "Increible loción con olor adictivo y elegante. Hecho de polvo de estrellas.",
          helpful: 0           // starting helpful votes count
        } 
    ],
    url: "https://www.mercadolibre.com.co/maison-alhambra-infini-oud-edp-100-ml-perfume/p/MCO2044704199?pdp_filters=item_id%3AMCO2745407504&matt_tool=15401541#origin=share&sid=share&wid=MCO2745407504&action=copy",
    images: [
      "assets/images/products/neptual/InfiniOudMaisonAlhambra100Ml0..png",
      "assets/images/products/neptual/InfiniOudMaisonAlhambra100Ml1..png"
    ]
  },

  // ── Eimy's Products (violet theme) ───────────────────────
  {
    id: "p04",
    owner: "gf",
    name: "MINISO — PELUCIA BT21 CHIMMY",
    price: 40064,
    rating: 5,
    description: "Confección suave de felpa, destaca por su gran durabilidad.",
    url: "https://www.mercadolibre.com.co/aa-miniso-pelucia-bt21-chimmy-pelucia-amarelo-15x11x23-cm-/p/MCO2045229580?pdp_filters=item_id%3AMCO1982204889&matt_tool=15401541#origin=share&sid=share&wid=MCO1982204889&action=copy",
    imagePosition: "top",
    reviews: [
            {
              author: "Neptual",   // your name
              stars: 5,            // 1 to 5
              text: "Gran compañero de almohada.",
              helpful: 0           // starting helpful votes count
            } 
    ],
    images: [
      "assets/images/products/eimy/MinisoPeluciaBt21Chimmy_0.png",
      "assets/images/products/eimy/MinisoPeluciaBt21Chimmy_1.png.png"
    ]
  }
];
