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
  const norm = s => (s || "").replace(/[\\u200c\\u200f\\u202a-\\u202e]/g, "").replace(/\\s+/g, " ").trim();
  function applyCanvasOnly() {
    const label = "تابلو بوم مخمل";
    const elements = [...document.querySelectorAll("h1,h2,h3,h4,h5,p,span,a,div,button,strong")];
    const candidates = elements
      .filter(el => norm(el.textContent) === label)
      .sort((a, b) => (a.children.length - b.children.length) || (norm(a.textContent).length - norm(b.textContent).length));
    let title = candidates[0];
    if (!title) {
      title = elements.filter(el => norm(el.textContent).includes(label))
        .sort((a, b) => norm(a.textContent).length - norm(b.textContent).length)[0];
    }
    if (!title) return;
    let node = title;
    for (let depth = 0; node && depth < 12; depth++, node = node.parentElement) {
      const imgs = node.querySelectorAll ? [...node.querySelectorAll("img")] : [];
      if (imgs.length) {
        const img = imgs[0];
        img.setAttribute("src", photos[label]);
        img.removeAttribute("srcset");
        img.removeAttribute("data-srcset");
        img.setAttribute("alt", "تابلو بوم مخمل نصب‌شده روی دیوار");
        img.style.objectFit = "cover";
        img.style.objectPosition = "center";
        return;
      }
    }
    // Fallback: if the category card uses a CSS background instead of an img.
    node = title;
    for (let depth = 0; node && depth < 8; depth++, node = node.parentElement) {
      if (depth >= 2) {
        node.style.backgroundImage = 'url("' + photos[label] + '")';
        node.style.backgroundSize = "cover";
        node.style.backgroundPosition = "center";
        return;
      }
    }
  }
  const run = () => { applyCanvasOnly(); setTimeout(applyCanvasOnly, 500); setTimeout(applyCanvasOnly, 1600); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
  new MutationObserver(() => applyCanvasOnly()).observe(document.documentElement, {childList:true,subtree:true});
})();