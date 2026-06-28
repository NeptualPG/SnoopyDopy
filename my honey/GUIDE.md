# 💜 Guía de Eimy para SnoopyDopy

Hola amor! Esta es tu guía para que puedas agregar tus productos, escribir tus reseñas y actualizar el sitio tú sola. solo sigue los pasos.

---

## 🌐 ¿Dónde está el sitio?

El sitio está en:

```
https://neptualPG.github.io/SnoopyDopy/
```

Cada vez que se guarda y se sube un cambio, el sitio se actualiza solo en aproximadamente 1 minuto.

---

## 📁 ¿Dónde están TUS productos?

Tus productos están en este archivo:

```
js/data/products.js
```

Busca la línea que dice:

```js
// ── Eimy's Products (violet theme) ───────────────────────
```

Todo lo que está debajo de esa línea (hasta el `];`) es tuyo. 💜

---

## ✏️ Cómo agregar un producto

Copia este bloque y pégalo antes del `];` al final del archivo:

```js
{
  id: "p10",                        // cambia el número para que sea único
  owner: "gf",                      // SIEMPRE "gf" — ese es tu tema violeta
  name: "NOMBRE DEL PRODUCTO",
  price: 150000,                    // precio en pesos colombianos (COP)
  rating: 5,                        // tu puntuación general: 1, 2, 3, 4 o 5
  description: "Descripción corta. ¿Qué es? ¿Para quién es?",
  url: "https://link-al-producto",  // la página de la tienda — deja "" si no tienes
  reviews: [
    {
      author: "Eimy",               // tu nombre
      stars: 5,                     // tu calificación: 1 a 5
      text: "Escribe tu opinión honesta aquí.",
      helpful: 0                    // déjalo en 0, la gente puede votarlo
    }
  ],
  image: "assets/images/products/eimy/tu-foto.png"
},
```

> 💡 Si tienes **dos o más fotos**, reemplaza `image:` por `images:` así:
> ```js
> images: [
>   "assets/images/products/eimy/foto1.png",
>   "assets/images/products/eimy/foto2.png"
> ]
> ```
> Esto crea una galería deslizable en la tarjeta automáticamente. ✨

---

## 🖼️ Cómo agregar una foto

1. Pon tu foto dentro de esta carpeta:
   ```
   assets/images/products/eimy/
   ```
2. Ponle un nombre simple sin espacios, por ejemplo: `collar-violeta.png`
3. Usa ese nombre en el campo `image:`:
   ```js
   image: "assets/images/products/eimy/collar-violeta.png"
   ```

---

## ⭐ Cómo funcionan las estrellas

| Campo | Qué hace |
|-------|----------|
| `rating` | La insignia de estrellas grande en la tarjeta — tu puntuación general |
| `stars` (dentro de la reseña) | Las estrellas que aparecen junto al texto de tu reseña |

Deben coincidir. Si le das 4 estrellas en tu reseña, pon `rating: 4` también.

---

## 💰 Los precios

- Escribe el precio en **pesos colombianos (COP)**, sin puntos ni símbolos — solo el número.
- Ejemplo: ciento cincuenta mil pesos → `150000`
- El sitio muestra automáticamente el equivalente en dólares debajo.
- Si el producto es gratis o no quieres mostrar precio, pon `price: 0` — la fila del precio desaparece sola.

---

## 🔗 El botón "Ver Producto"

Si pones un `url`, aparece un botón **VIEW PRODUCT ↗** en tu tarjeta que abre la página original de la tienda.

```js
url: "https://www.tienda.com/producto"
```

Si lo dejas vacío (`url: ""`), el botón no aparece. ¡Sin problema!

---

## 🌈 Tu color de tema

Tu lado siempre es **violeta** 💜. Cambia automáticamente cuando alguien hace clic en **// EIMY'S REVIEWS** en el sitio. No tienes que hacer nada para eso.

---

## 💾 Cómo guardar tus cambios en el sitio en vivo

Después de editar los archivos, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
git add .
git commit -m "eimy: nuevo producto"
git push
```

Espera aproximadamente 1 minuto, recarga el sitio y tu producto va a estar ahí. 🎉

---

## ❓ ¿Algo se rompió?

Solo escríbele a Neptual 🧡 — él lo arregla.

---

<div align="center">
  <sub>Hecho con 💜 solo para ti — Neptual</sub>
</div>
