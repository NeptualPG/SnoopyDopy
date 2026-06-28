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
    name: "HOLO CLUTCH V2",
    price: 556500,
    rating: 5,
    description: "Holographic clutch with violet LED trim. Limited edition.",
    url: "",
    reviews: [
      {
        author: "Eimy",
        stars: 5,
        text: "I get compliments every time I carry this. The holographic effect under club lights is unreal.",
        helpful: 29
      }
    ],
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/1abcd9c27-8bd9-4590-95bd-7a707395e350.png"
  },
  {
    id: "p05",
    owner: "gf",
    name: "NEO-7 CRYSTAL NECKLACE",
    price: 311500,
    rating: 4,
    description: "Glowing violet crystal pendant on gunmetal chain. Handcrafted.",
    url: "",
    reviews: [
      {
        author: "VioletDream",
        stars: 4,
        text: "Absolutely beautiful. The glow is subtle and elegant, not overpowering. Great craftsmanship.",
        helpful: 11
      },
      {
        author: "NeonRose",
        stars: 5,
        text: "Perfect gift. Arrived well packaged and looked even better in person than in the photo.",
        helpful: 9
      }
    ],
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/128102b61-7dce-4c27-a900-15c12917b6c0.png"
  },
  {
    id: "p06",
    owner: "gf",
    name: "CYBER-7 SHADES",
    price: 416500,
    rating: 4,
    description: "LED-frame sunglasses with 8 glow patterns. UV400 lenses.",
    url: "",
    reviews: [
      {
        author: "LensHunter",
        stars: 4,
        text: "UV400 lenses are legit and the 8 patterns are all genuinely different. Battery life could be better.",
        helpful: 16
      }
    ],
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/11b52979c-1d53-43d3-b575-01ac13d71e4c.png"
  }
];
