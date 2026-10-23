(() => {
  const photos = {
    "تابلو بوم مخمل": "https://wallartdesigns.com.au/cdn/shop/files/antique-floral-assemblage-ii-canvas-stretched-canvas-45x30cm-206040_1200x1200.jpg?v=1733484596",
    "پوستر پارچه‌ای": "https://www.bilderwelten.it/img/635/635/resize/s/t/strasse_in_procida_psbwb-p_aoa12_34.jpg",
    "استیکر پشت‌چسب‌دار": "https://d3v85gmohv94ja.cloudfront.net/images/opt/contentimages/images/baskimo_kendinden_yapiskanli_folyo_baski_.jpg.webp?v=1260",
    "پوستر دیواری فتوگلاسه": "https://www.goodvinilos.com/6849-large_default/mural-de-pared-arboles-en-otono.jpg",
    "رومیزی مخمل": "https://homedeko.ro/cdn/shop/files/175E5644-0876-4BF0-B60F-4F2342B450CA.jpg?v=1750341559",
    "فرشینه پارچه‌ای مخمل": "https://www.cdiscount.com/pdt2/9/1/7/2/700x700/ywe7696117712917/rw/tapis-coffee-100x160-cm-tapis-en-velours-de-corai.jpg",
    "پوستر دیواری بک‌لایت": "https://s.alicdn.com/@sc04/kf/H4b1098a28f304e83b2c6fdf0a688ff4d5/A0-Size-Aluminum-Frame-Magnetic-Pull-Sliding-Poster-Lightbox-for-Cinema-Movie-Display-Retail-Store-Advertising-Easy-Change-LED.png",
    "کاغذ دیواری به صورت شیت پوستر": "https://res.cloudinary.com/gimmersta-wallpaper/image/upload/c_fill%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200%2Ch_1200/v1731072527/cronos-ha/pages/paper-types/PandS_sample.jpg"
  };
  const norm = s => (s || "").replace(/\u200c/g, " ").replace(/\s+/g, " ").trim();
  function applyCanvasOnly() {
    const all = [...document.querySelectorAll("h1,h2,h3,h4,p,span,a,div")];
    const matches = all.filter(el => {
      const t = norm(el.textContent);
      return t === "تابلو بوم مخمل" || t === "تابلو بوم";
    }).sort((a,b) => norm(a.textContent).length - norm(b.textContent).length);
    const target = matches[0];
    if (!target) return;
    let node = target;
    for (let depth = 0; node && depth < 8; depth++, node = node.parentElement) {
      if (depth > 0 && node.matches && node.matches("a,article,li,[class*='card'],[class*='category'],[class*='product']")) {
        const img = node.querySelector("img");
        if (img) {
          img.src = photos["تابلو بوم مخمل"];
          img.removeAttribute("srcset");
          img.style.objectFit = "cover";
          img.alt = "تابلو بوم مخمل نصب‌شده روی دیوار";
          return;
        }
        node.style.backgroundImage = 'url("' + photos["تابلو بوم مخمل"] + '")';
        node.style.backgroundSize = "cover";
        node.style.backgroundPosition = "center";
        return;
      }
    }
  }
  function apply() {
    for (const [label, src] of Object.entries(photos)) {
      const candidates = [...document.querySelectorAll("h1,h2,h3,h4,p,span,a,div")].filter(el => norm(el.textContent) === norm(label));
      const target = candidates.find(el => ![...el.children].some(ch => norm(ch.textContent) === norm(label))) || candidates[0];
      if (!target) continue;
      let node = target;
      for (let depth = 0; node && depth < 9; depth++, node = node.parentElement) {
        const img = node.querySelector && node.querySelector("img");
        if (img) {
          img.src = src;
          img.removeAttribute("srcset");
          img.loading = "lazy";
          img.style.objectFit = "cover";
          img.alt = label + "؛ تصویر واقعی مرتبط با محصول";
          break;
        }
        if (depth >= 1 && node.matches && node.matches("a,article,li,[class*='card'],[class*='category'],[class*='product']")) {
          node.style.backgroundImage = 'url("' + src + '")';
          node.style.backgroundSize = "cover";
          node.style.backgroundPosition = "center";
        }
      }
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", applyCanvasOnly); else applyCanvasOnly();
  setTimeout(applyCanvasOnly, 900);
  setTimeout(applyCanvasOnly, 2200);
})();