"use strict";

// IMPORTANT: Replace this with the business WhatsApp number.
// Use country code and digits only, without spaces or a plus sign.
const WHATSAPP_NUMBER = "919871116462";
const FALLBACK_IMAGE = "assets/images/products/product-placeholder.svg";

const categories = [
  { id: "signature-desserts", name: "Signature Desserts", note: "Layered, chilled and deeply comforting" },
  { id: "cupcake-collection", name: "Cupcake Collection", note: "Made for sharing, gifting and dessert tables" },
  { id: "celebration-cakes", name: "Celebration Cakes", note: "A centerpiece for memorable occasions" },
  { id: "signature-tea-cakes", name: "Signature Tea Cakes", note: "Slow afternoons and thoughtful gifts" }
];

// PRODUCT EDITING GUIDE
// 1. Add: copy one object, give it a unique id, and update every field.
// 2. Remove: delete its complete object.
// 3. Change price or name: edit only that object's price or name.
// 4. New Arrival: set badge: "New Arrival".
// 5. Customer Favorite: set badge: "Customer Favorite" and featured: true if desired.
// 6. Unavailable: set available: false; the menu keeps it visible, print hides it.
// 7. New category: add it to categories and use that id in the product's category field.
// 8. Real photo: add the named file under assets/images/products; no code change needed.
// 9. Reorder: change sortOrder; lower numbers appear first.
const products = [
  {
    id: "tiramisu-with-alcohol",
    name: "Tiramisu Tub with Alcohol",
    originalName: "Tiramisu Tub with Alcohol",
    category: "signature-desserts",
    description: "A rich, layered Italian-inspired dessert with coffee-soaked notes, velvety cream, cocoa, and a refined touch of alcohol.",
    price: 375,
    size: "200g",
    image: "assets/images/products/tiramisu-with-alcohol.jpg",
    imageAlt: "Signature Italian tiramisu with alcohol in a dessert tub",
    badge: "Customer Favorite",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: true,
    featured: true,
    sortOrder: 1
  },
  {
    id: "classic-tiramisu",
    name: "Tiramisu Tub without Alcohol",
    originalName: "Tiramisu Tub without Alcohol",
    category: "signature-desserts",
    description: "A comforting, alcohol-free tiramisu layered with coffee notes, velvety cream, and a delicate cocoa finish.",
    price: 350,
    size: "200g",
    image: "assets/images/products/classic-tiramisu.jpg",
    imageAlt: "Classic alcohol-free Italian tiramisu in a dessert tub",
    badge: "Customer Favorite",
    available: true,
    dietaryLabels: ["Alcohol-free recipe", "Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: true,
    sortOrder: 2
  },
  {
    id: "blueberry-cupcakes",
    name: "Wild Blueberry Velvet Cupcakes",
    originalName: "Wild Blueberry Velvet Cupcakes",
    category: "cupcake-collection",
    description: "Soft, elegant cupcakes with bright blueberry notes and a smooth, celebration-ready finish.",
    price: 900,
    size: "Pack of 6",
    image: "assets/images/products/blueberry-cupcakes.jpg",
    imageAlt: "Six Wild Blueberry Velvet Cupcakes",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 1
  },
  {
    id: "mini-blueberry-cupcakes",
    name: "Wild Blueberry Velvet Mini Cupcakes",
    originalName: "Wild Blueberry Velvet Mini Cupcakes",
    category: "cupcake-collection",
    description: "Petite blueberry cupcakes created for gifting, sharing, dessert tables, and smaller celebrations.",
    price: 600,
    size: "Pack of 6",
    image: "assets/images/products/mini-blueberry-cupcakes.jpg",
    imageAlt: "Six Wild Blueberry Velvet Mini Cupcakes",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 2
  },
  {
    id: "vanilla-cupcakes",
    name: "Classic Vanilla Bean Cupcakes",
    originalName: "Classic Vanilla Bean Cupcakes",
    category: "cupcake-collection",
    description: "Delicate vanilla cupcakes with a timeless flavor and an elegant finish for every occasion.",
    price: 700,
    size: "Pack of 6",
    image: "assets/images/products/vanilla-cupcakes.jpg",
    imageAlt: "Six Classic Vanilla Bean Cupcakes",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 3
  },
  {
    id: "mini-vanilla-cupcakes",
    name: "Classic Vanilla Bean Mini Cupcakes",
    originalName: "Classic Vanilla Bean Mini Cupcakes",
    category: "cupcake-collection",
    description: "Small, charming vanilla cupcakes that are perfect for gatherings, gifting, and dessert tables.",
    price: 500,
    size: "Pack of 6",
    image: "assets/images/products/mini-vanilla-cupcakes.jpg",
    imageAlt: "Six Classic Vanilla Bean Mini Cupcakes",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 4
  },
  {
    id: "lemon-blueberry-cake-500g",
    name: "Lemon Blueberry Celebration Cake",
    originalName: "Lemon Blueberry Celebration Cake",
    category: "celebration-cakes",
    description: "A bright and elegant cake pairing refreshing lemon with sweet blueberry notes.",
    price: 1100,
    size: "500g",
    image: "assets/images/products/lemon-blueberry-cake-500g.jpg",
    imageAlt: "500g Lemon Blueberry Celebration Cake",
    badge: "Chef's Recommendation",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 1
  },
  {
    id: "lemon-blueberry-cake-1kg",
    name: "Lemon Blueberry Celebration Cake",
    originalName: "Lemon Blueberry Celebration Cake",
    category: "celebration-cakes",
    description: "A larger celebration cake combining refreshing citrus and blueberry flavors for memorable occasions.",
    price: 2200,
    size: "1kg",
    image: "assets/images/products/lemon-blueberry-cake-1kg.jpg",
    imageAlt: "1kg Lemon Blueberry Celebration Cake",
    badge: "Chef's Recommendation",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 2
  },
  {
    id: "coffee-walnut-tea-cake",
    name: "Coffee Walnut Indulgence Tea Cake",
    originalName: "Coffee Walnut Indulgence Tea Cake",
    category: "signature-tea-cakes",
    description: "A comforting coffee-infused tea cake balanced with the rich texture and flavor of walnuts.",
    price: 700,
    size: "1kg",
    image: "assets/images/products/coffee-walnut-tea-cake.jpg",
    imageAlt: "Coffee Walnut Indulgence Tea Cake",
    badge: "Customer Favorite",
    available: true,
    dietaryLabels: ["Contains walnuts", "Please ask about dietary preferences"],
    allergenNote: "Contains walnuts. Please share other allergies before ordering.",
    containsAlcohol: false,
    featured: true,
    sortOrder: 1
  },
  {
    id: "banana-tea-cake",
    name: "Caramelized Banana Tea Cake",
    originalName: "Caramelized Banana Tea Cake",
    category: "signature-tea-cakes",
    description: "A moist and comforting banana tea cake with warm, naturally sweet notes.",
    price: 1200,
    size: "1kg",
    image: "assets/images/products/banana-tea-cake.jpg",
    imageAlt: "Caramelized Banana Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 2
  },
  {
    id: "orange-tea-cake",
    name: "Citrus Orange Tea Cake",
    originalName: "Citrus Orange Tea Cake",
    category: "signature-tea-cakes",
    description: "A fragrant tea cake with bright citrus notes and a soft, refined crumb.",
    price: 1200,
    size: "1kg",
    image: "assets/images/products/orange-tea-cake.jpg",
    imageAlt: "Citrus Orange Tea Cake",
    badge: "Customer Favorite",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: true,
    sortOrder: 3
  },
  {
    id: "chocolate-tea-cake",
    name: "Belgian Chocolate Tea Cake",
    originalName: "Belgian Chocolate Tea Cake",
    category: "signature-tea-cakes",
    description: "A rich chocolate tea cake created for deep cocoa flavor and comforting indulgence.",
    price: 1200,
    size: "1kg",
    image: "assets/images/products/chocolate-tea-cake.jpg",
    imageAlt: "Belgian Chocolate Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 4
  },
  {
    id: "blueberry-tea-cake",
    name: "Blueberry Crumble Tea Cake",
    originalName: "Blueberry Crumble Tea Cake",
    category: "signature-tea-cakes",
    description: "A soft blueberry tea cake with fruity notes and a satisfying crumble-inspired finish.",
    price: 1200,
    size: "1kg",
    image: "assets/images/products/blueberry-tea-cake.jpg",
    imageAlt: "Blueberry Crumble Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 5
  },
  {
    id: "motichoor-tea-cake",
    name: "Motichoor Celebration Tea Cake",
    originalName: "Motichoor Celebration Tea Cake",
    category: "signature-tea-cakes",
    description: "A festive fusion tea cake inspired by the familiar flavor and warmth of motichoor ladoo.",
    price: 1200,
    size: "1kg",
    image: "assets/images/products/motichoor-tea-cake.jpg",
    imageAlt: "Motichoor Celebration Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 6
  },
  {
    id: "gulab-jamun-tea-cake",
    name: "Gulab Jamun Fusion Tea Cake",
    originalName: "Gulab Jamun Fusion Tea Cake",
    category: "signature-tea-cakes",
    description: "A modern fusion tea cake inspired by the rich and comforting flavors of gulab jamun.",
    price: 1200,
    size: "1kg",
    image: "assets/images/products/gulab-jamun-tea-cake.jpg",
    imageAlt: "Gulab Jamun Fusion Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 7
  }
];

/* FUTURE PRODUCT EXAMPLE - copy into products and update values to display it.
{
  id: "future-product", name: "Future Product", originalName: "Future Product",
  category: "signature-desserts", description: "Add the confirmed description.",
  price: 0, size: "[ADD SIZE]", image: "assets/images/products/future-product.jpg",
  imageAlt: "Future product", badge: "New Arrival", available: true,
  dietaryLabels: ["Please ask about dietary preferences"],
  allergenNote: "Please share allergies before ordering.", containsAlcohol: false,
  featured: false, sortOrder: 99
}
*/

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
}

function isWhatsAppConfigured() {
  return /^\d{10,15}$/.test(WHATSAPP_NUMBER) && !WHATSAPP_NUMBER.includes("X");
}

function whatsappUrl(message) {
  return isWhatsAppConfigured() ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}` : "#contact";
}

function productCard(product, featured = false) {
  const displayBadge = product.available ? product.badge : "Currently Unavailable";
  const labels = [
    ...(product.containsAlcohol ? ["Contains alcohol"] : []),
    ...product.dietaryLabels
  ];
  const message = `Hello Bhoomika, I would like to enquire about the ${product.name}, ${product.size}, priced at ${formatPrice(product.price)}.`;

  return `
    <article class="product-card${featured ? " featured-card" : ""}${product.available ? "" : " is-unavailable"}" data-product-id="${product.id}">
      <div class="product-image">
        ${displayBadge ? `<span class="badge" data-badge="${displayBadge}">${displayBadge}</span>` : ""}
        <img src="${product.image}" data-fallback="${FALLBACK_IMAGE}" alt="${product.imageAlt}" width="600" height="600" loading="lazy">
      </div>
      <div class="product-body">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-description">${product.description}</p>
        <div class="product-meta"><span class="product-size">${product.size}</span><strong class="product-price">${formatPrice(product.price)}</strong></div>
        <div class="product-labels">${labels.map(label => `<span class="${label === "Contains alcohol" ? "alcohol" : ""}">${label}</span>`).join("")}</div>
        <a class="button product-action" href="${whatsappUrl(message)}" ${isWhatsAppConfigured() ? 'target="_blank" rel="noopener noreferrer"' : ""} ${product.available ? "" : 'aria-disabled="true" tabindex="-1"'} aria-label="Enquire on WhatsApp about ${product.name}, ${product.size}, ${formatPrice(product.price)}">${product.available ? "Enquire on WhatsApp" : "Currently Unavailable"}</a>
      </div>
    </article>`;
}

function renderMenu() {
  const menuSections = document.querySelector("[data-menu-sections]");
  menuSections.innerHTML = categories.map(category => {
    const items = products.filter(product => product.category === category.id).sort((a, b) => a.sortOrder - b.sortOrder);
    return `<section class="menu-category" id="${category.id}" aria-labelledby="${category.id}-title">
      <div class="category-heading"><h3 id="${category.id}-title">${category.name}</h3><span>${category.note}</span></div>
      <div class="product-grid">${items.map(product => productCard(product)).join("")}</div>
    </section>`;
  }).join("");
  installImageFallbacks();
}

function installImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach(image => {
    image.addEventListener("error", () => {
      if (image.src.endsWith(FALLBACK_IMAGE)) return;
      image.src = image.dataset.fallback;
      image.closest(".product-card").classList.add("has-placeholder");
      image.alt = `${image.closest(".product-card").querySelector(".product-title").textContent}. Photo coming soon.`;
    }, { once: true });
  });
}

function setupNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  }));
}

function setupCategoryTracking() {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll("[data-category-nav] a")];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => link.setAttribute("aria-current", String(link.getAttribute("href") === `#${visible.target.id}`)));
  }, { rootMargin: "-35% 0px -55%", threshold: [0, .15, .5] });
  document.querySelectorAll(".menu-category").forEach(section => observer.observe(section));
}

function setupActions() {
  const generalMessage = "Hello Bhoomika, I would like to enquire about your dessert menu.";
  document.querySelectorAll("[data-general-whatsapp]").forEach(link => {
    link.href = whatsappUrl(generalMessage);
    if (isWhatsAppConfigured()) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
  document.querySelector("[data-whatsapp-display]").textContent = isWhatsAppConfigured()
    ? `WhatsApp: +${WHATSAPP_NUMBER}`
    : "WhatsApp number will be added soon.";

  const menuUrl = window.location.protocol === "file:"
    ? "https://thedesserttablebybhoomika.com/"
    : window.location.href.split("#")[0];
  document.querySelector("[data-site-qr]").src = `https://api.qrserver.com/v1/create-qr-code/?size=440x440&color=0b2847&bgcolor=fffaf4&data=${encodeURIComponent(menuUrl)}`;
}

function validateCatalog() {
  const ids = new Set(products.map(product => product.id));
  if (products.length !== 15 || ids.size !== products.length) console.error("Product catalog validation failed.");
}

document.addEventListener("DOMContentLoaded", () => {
  validateCatalog();
  renderMenu();
  setupNavigation();
  setupCategoryTracking();
  setupActions();
  document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
});