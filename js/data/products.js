/**
 * products.js — SnoopyDopy Cyberpunk Marketplace
 *
 * Product catalogue. Add, edit, or remove items here.
 *
 * Each product object accepts:
 * ┌──────────────┬────────────────────────────────────────────────────┐
 * │ Field        │ Description                                        │
 * ├──────────────┼────────────────────────────────────────────────────┤
 * │ id           │ Unique string identifier, e.g. "p01"               │
 * │ owner        │ "me" (orange theme) or "gf" (violet theme)         │
 * │ name         │ Product display name                               │
 * │ price        │ Number — price without currency symbol             │
 * │ currency     │ Currency symbol string, e.g. "$", "€", "£"        │
 * │ description  │ Short product description (1–2 sentences)          │
 * │ image        │ URL or relative path to product image              │
 * │ contact      │ mailto:, tel:, or any URL for the "Contact" button │
 * └──────────────┴────────────────────────────────────────────────────┘
 *
 * Example:
 *   {
 *     id: "p07",
 *     owner: "me",
 *     name: "CYBER BACKPACK",
 *     price: 199,
 *     currency: "$",
 *     description: "Anti-RFID compartments with LED edge lighting.",
 *     image: "assets/images/products/cyber-backpack.webp",
 *     contact: "mailto:me@neonmarket.io"
 *   }
 */

export const PRODUCTS = [
  // ── My Products (orange theme) ────────────────────────────
  {
    id: "p01",
    owner: "me",
    name: "NEON HOODIE X1",
    price: 129,
    currency: "$",
    description: "LED-trimmed hoodie with programmable glow strips. USB-C rechargeable.",
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/19f9a146b-1dcc-4629-8e50-ab62323cddb4.png",
    contact: "mailto:me@neonmarket.io"
  },
  {
    id: "p02",
    owner: "me",
    name: "PULSE LED SNEAKERS",
    price: 189,
    currency: "$",
    description: "Reactive LED soles. 12 color modes. Waterproof shell.",
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/13c142384-c9a8-43de-9403-b5254a3b334b.png",
    contact: "mailto:me@neonmarket.io"
  },
  {
    id: "p03",
    owner: "me",
    name: "CIRCUIT SMARTWATCH",
    price: 249,
    currency: "$",
    description: "Holographic display. Heart-rate + neural-sync. 7-day battery.",
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/1757d79a8-c872-4329-8b03-34136daccd05.png",
    contact: "mailto:me@neonmarket.io"
  },

  // ── GF's Products (violet theme) ─────────────────────────
  {
    id: "p04",
    owner: "gf",
    name: "HOLO CLUTCH V2",
    price: 159,
    currency: "$",
    description: "Holographic clutch with violet LED trim. Limited edition.",
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/1abcd9c27-8bd9-4590-95bd-7a707395e350.png",
    contact: "mailto:her@neonmarket.io"
  },
  {
    id: "p05",
    owner: "gf",
    name: "NEO-7 CRYSTAL NECKLACE",
    price: 89,
    currency: "$",
    description: "Glowing violet crystal pendant on gunmetal chain. Handcrafted.",
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/128102b61-7dce-4c27-a900-15c12917b6c0.png",
    contact: "mailto:her@neonmarket.io"
  },
  {
    id: "p06",
    owner: "gf",
    name: "CYBER-7 SHADES",
    price: 119,
    currency: "$",
    description: "LED-frame sunglasses with 8 glow patterns. UV400 lenses.",
    image: "https://image.qwenlm.ai/public_source/8eddacd5-9e2c-4465-9105-190904a28c78/11b52979c-1d53-43d3-b575-01ac13d71e4c.png",
    contact: "mailto:her@neonmarket.io"
  }
];
