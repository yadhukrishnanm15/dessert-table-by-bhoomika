"use strict";

// IMPORTANT: Replace this with the business WhatsApp number.
// Use country code and digits only, without spaces or a plus sign.
const WHATSAPP_NUMBER = "919871116462";
const FALLBACK_IMAGE = "assets/images/products/product-placeholder.svg";
const PRODUCT_IMAGE_VERSION = "20261018c";
// Set to false after the season to hide all Diwali content and navigation.
const DIWALI_SEASON_ENABLED = true;

// Attribution is intentionally first-name only. Confirm consent before publishing.
const testimonials = [
  {
    headline: "Made a dessert lover out of me.",
    quote: "The tiramisu is great. I'm not even a person with a sweet tooth, and I loved it. The right amount of sweet, and the flavour is amazing!",
    name: "Ria",
    featured: true
  },
  {
    headline: "One bite, and the whole office was hooked.",
    quote: "The tiramisu is so much better than what we usually order — we'll order only from you now. And the coffee walnut tea cake? The whole office has become a fan. Everyone wants more!",
    name: "Athira",
    featured: false
  },
  {
    headline: "Every last spoonful, gone.",
    quote: "Gone in minutes. You are totally spoiling us — not fair!",
    name: "Akanksha",
    featured: false
  },
  {
    headline: "Dessert and breakfast, both perfect.",
    quote: "It was so good — both kinds! I also loved the granola. Had it with dahi as a post-breakfast snack. Yum yum!",
    name: "Debaroti",
    featured: false
  }
];

const categories = [
  { id: "signature-tea-cakes", name: "Signature Tea Cakes", note: "Slow afternoons and thoughtful gifts" },
  { id: "signature-desserts", name: "Signature Desserts", note: "Layered, chilled and deeply comforting" },
  { id: "cupcake-collection", name: "Cupcake Collection", note: "Made for sharing, gifting and dessert tables" }
];

const diwaliHampers = [
  {
    id: "diwali-mithaas",
    name: "Diwali Mithaas",
    category: "Our Classic Hamper",
    enquiryName: "Diwali Mithaas Classic Hamper",
    tagline: "Chhoti Chhoti Khushiyan, Badi Roshniyan",
    image: "assets/images/hampers/diwali-mithaas.png",
    imageAlt: "Diwali Mithaas in a white gift box with chocolate chip tea cake, cookie and crunch jars, and a small Diwali gift",
    inclusions: [
      "Chocolate Chip Butter Tea Cake",
      "Rajgira Cookies",
      "Herb Millet & Peanut Crunch",
      "A small Diwali gift"
    ]
  },
  {
    id: "diwali-parampara",
    name: "Diwali Parampara",
    category: "Our Signature Hamper",
    enquiryName: "Diwali Parampara Signature Hamper",
    tagline: "Traditional Treats for Brighter Bonds",
    image: "assets/images/hampers/diwali-parampara.png",
    imageAlt: "Diwali Parampara in a kraft gift box with Chocolate Pista Barfi and Rose Dryfruit Ladoos, chocolate chip tea cake, cookie and crunch jars, and a small Diwali gift",
    inclusions: [
      "Chocolate Chip Butter Tea Cake",
      "Chocolate Pista Barfi & Rose Dryfruit Ladoos",
      "Rajgira Cookies",
      "Herb Millet & Peanut Crunch",
      "A small Diwali gift"
    ]
  },
  {
    id: "diwali-utsav",
    name: "Diwali Utsav",
    category: "Our Premium Hamper",
    enquiryName: "Diwali Utsav Premium Hamper",
    tagline: "Bigger Celebrations, Happier Together",
    image: "assets/images/hampers/diwali-utsav.png?v=20261029c",
    imageAlt: "Diwali Utsav in a navy gift box with chocolate chip tea cake, cookie and crunch jars, Kunafa Dates and Rose Dryfruit Ladoos, and two Motichoor mini tea cakes",
    inclusions: [
      "Chocolate Chip Butter Tea Cake",
      "Herb Millet & Peanut Crunch",
      "Rajgira Cookies",
      "Kunafa Dates",
      "Rose Dryfruit Ladoos",
      "Two Motichoor Mini Tea Cakes",
      "A special surprise Diwali gift"
    ]
  }
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
    id: "tiramisu-tub",
    name: "Classic Tiramisu Tub",
    originalName: "Classic Tiramisu Tub",
    category: "signature-desserts",
    description: "Coffee-soaked layers and velvety cream finished with a delicate cocoa dusting. Choose your preferred version below.",
    price: 350,
    size: "200 g",
    image: "assets/images/products/tiramisu-rectangular-tub.jpg",
    imageAlt: "Layered tiramisu topped with cocoa, served in a dessert tub",
    variants: [
      { id: "without-alcohol", label: "Without alcohol", price: 350 },
      { id: "with-alcohol", label: "With alcohol", price: 375 }
    ],
    badge: "Customer Favorite",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: true,
    sortOrder: 1
  },
  {
    id: "blueberry-cupcakes",
    name: "Wild Blueberry Velvet Cupcakes",
    originalName: "Wild Blueberry Velvet Cupcakes",
    category: "cupcake-collection",
    description: "Soft, elegant cupcakes with bright blueberry notes and a smooth, celebration-ready finish.",
    price: 900,
    size: "6 regular cupcakes",
    image: "assets/images/products/blueberry-cupcakes.jpg",
    imageAlt: "Six Wild Blueberry Velvet Cupcakes",
    variants: [
      { id: "regular", label: "Regular · 6 cupcakes", size: "6 regular cupcakes", price: 900, image: "assets/images/products/blueberry-cupcakes.jpg", imageAlt: "Six Wild Blueberry Velvet regular cupcakes" },
      { id: "mini", label: "Mini · 6 cupcakes", size: "6 mini cupcakes", price: 600, image: "assets/images/products/mini-blueberry-cupcakes.jpg", imageAlt: "Six mini Wild Blueberry Velvet cupcakes" }
    ],
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 1
  },
  {
    id: "vanilla-cupcakes",
    name: "Classic Vanilla Bean Cupcakes",
    originalName: "Classic Vanilla Bean Cupcakes",
    category: "cupcake-collection",
    description: "Delicate vanilla cupcakes with a timeless flavor and an elegant finish for every occasion.",
    price: 700,
    size: "6 regular cupcakes",
    image: "assets/images/products/vanilla-cupcakes.jpg",
    imageAlt: "Six Classic Vanilla Bean Cupcakes",
    variants: [
      { id: "regular", label: "Regular · 6 cupcakes", size: "6 regular cupcakes", price: 700, image: "assets/images/products/vanilla-cupcakes.jpg", imageAlt: "Six Classic Vanilla Bean regular cupcakes" },
      { id: "mini", label: "Mini · 6 cupcakes", size: "6 mini cupcakes", price: 500, image: "assets/images/products/mini-vanilla-cupcakes.jpg", imageAlt: "Six mini Classic Vanilla Bean cupcakes" }
    ],
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 3
  },
  {
    id: "chocolate-cupcakes",
    name: "Chocolate Cupcakes",
    originalName: "Chocolate Cupcakes",
    category: "cupcake-collection",
    description: "Rich chocolate cupcakes for a classic, cocoa-filled treat.",
    price: 800,
    size: "6 regular cupcakes",
    image: "assets/images/products/chocolate-cupcakes-regular.png",
    imageAlt: "A regular chocolate cupcake topped with a tall swirl of chocolate frosting and sprinkles",
    variants: [
      { id: "regular", label: "Regular · 6 cupcakes", size: "6 regular cupcakes", price: 800, image: "assets/images/products/chocolate-cupcakes-regular.png", imageAlt: "A regular chocolate cupcake topped with a tall swirl of chocolate frosting and sprinkles" },
      { id: "mini", label: "Mini · 6 cupcakes", size: "6 mini cupcakes", price: 650, image: "assets/images/products/mini-chocolate-cupcakes.png", imageAlt: "A group of mini chocolate cupcakes topped with chocolate frosting and sprinkles" }
    ],
    badge: "",
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
    price: 600,
    size: "500 g",
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
    id: "chocolate-chip-banana-tea-cake",
    name: "Chocolate Chip Banana Tea Cake",
    originalName: "Chocolate Chip Banana Tea Cake",
    category: "signature-tea-cakes",
    description: "A moist banana loaf studded with chocolate chips for a comforting, feel-good favourite.",
    price: 750,
    size: "500 g",
    image: "assets/images/products/banana-tea-cake.jpg",
    imageAlt: "Chocolate Chip Banana Tea Cake",
    badge: "Customer Favorite",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 2
  },
  {
    id: "lemon-loaf-tea-cake",
    name: "Lemon Loaf Tea Cake",
    originalName: "Lemon Loaf Tea Cake",
    category: "signature-tea-cakes",
    description: "A tender loaf with fresh lemon notes and a bright, gently zesty finish.",
    price: 600,
    size: "500 g",
    image: "assets/images/products/orange-tea-cake.jpg",
    imageAlt: "Lemon Loaf Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: true,
    sortOrder: 3
  },
  {
    id: "chocolate-tea-cake",
    name: "Ruby Velvet Chocolate Tea Cake",
    originalName: "Ruby Velvet Chocolate Tea Cake",
    category: "signature-tea-cakes",
    description: "A tender chocolate tea cake with ruby chocolate callets and their delicate berry-like notes.",
    price: 600,
    size: "400 g",
    image: "assets/images/products/chocolate-tea-cake.jpg",
    imageAlt: "Ruby Velvet Chocolate Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 4
  },
  {
    id: "motichoor-tea-cake",
    name: "Motichoor Celebration Tea Cake",
    originalName: "Motichoor Celebration Tea Cake",
    category: "signature-tea-cakes",
    description: "A festive fusion tea cake inspired by the familiar flavor and warmth of motichoor ladoo.",
    price: 800,
    size: "500 g",
    image: "assets/images/products/motichoor-tea-cake.jpg",
    imageAlt: "Motichoor Celebration Tea Cake",
    badge: "Chef's Special",
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
    price: 500,
    size: "300 g",
    image: "assets/images/products/gulab-jamun-tea-cake.jpg",
    imageAlt: "Gulab Jamun Fusion Tea Cake",
    badge: "",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 7
  },
  {
    id: "marble-tea-cake",
    name: "Marble Swirl Tea Cake",
    originalName: "Marble Swirl Tea Cake",
    category: "signature-tea-cakes",
    description: "A soft tea cake with a classic swirl of chocolate through its golden crumb.",
    price: 650,
    size: "500 g",
    image: "assets/images/products/marble-tea-cake.jpg",
    imageAlt: "Marble Swirl Tea Cake with a golden crumb and chocolate marbling",
    badge: "Must Try",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 8
  },
  {
    id: "chocolate-chip-butter-tea-cake",
    name: "Chocolate Chip Butter Tea Cake",
    originalName: "Chocolate Chip Butter Tea Cake",
    category: "signature-tea-cakes",
    description: "A buttery, golden tea cake generously dotted with chocolate chips.",
    price: 650,
    size: "500 g",
    image: "assets/images/products/chocolate-chip-tea-cake.jpg",
    imageAlt: "Golden Chocolate Chip Tea Cake dotted with chocolate chips",
    badge: "Must Try",
    available: true,
    dietaryLabels: ["Please ask about dietary preferences"],
    allergenNote: "Please share allergies before ordering.",
    containsAlcohol: false,
    featured: false,
    sortOrder: 9
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
  return isWhatsAppConfigured() ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : "#contact";
}

function testimonialFigure(testimonial) {
  const figure = document.createElement("figure");
  figure.className = "testimonial";
  const headline = document.createElement("h3");
  headline.textContent = testimonial.headline;
  const quote = document.createElement("blockquote");
  const paragraph = document.createElement("p");
  paragraph.textContent = testimonial.quote;
  quote.append(paragraph);
  const attribution = document.createElement("figcaption");
  attribution.textContent = testimonial.name;
  figure.append(headline, quote, attribution);
  return figure;
}

function renderTestimonials() {
  const grid = document.querySelector("[data-testimonial-grid]");
  testimonials.forEach(testimonial => {
    const figure = testimonialFigure(testimonial);
    if (testimonial.featured) {
      figure.classList.add("testimonial-featured");
      document.querySelector("#signature-desserts").after(figure);
    } else {
      grid.append(figure);
    }
  });
  document.querySelector("[data-testimonials]").hidden = false;
}

function setupTicker() {
  const track = document.querySelector("[data-ticker-track]");
  const duplicate = track.firstElementChild.cloneNode(true);
  duplicate.setAttribute("aria-hidden", "true");
  duplicate.classList.add("ticker-duplicate");
  track.append(duplicate);
  track.classList.add("is-animated");
  const toggle = document.querySelector("[data-ticker-toggle]");
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    const paused = toggle.getAttribute("aria-pressed") !== "true";
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.setAttribute("aria-label", paused ? "Resume brand story movement" : "Pause brand story movement");
    track.classList.toggle("is-paused", paused);
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      track.classList.toggle("is-out-of-view", !entries[0].isIntersecting);
    });
    observer.observe(track.closest(".brand-ticker"));
  }
  const syncVisibility = () => track.classList.toggle("is-page-hidden", document.hidden);
  document.addEventListener("visibilitychange", syncVisibility);
  syncVisibility();
}

function setupWhatsAppHierarchy() {
  if (!("IntersectionObserver" in window)) return;
  const floatingLink = document.querySelector("[data-whatsapp-float]");
  const observer = new IntersectionObserver(entries => {
    floatingLink.classList.toggle("is-secondary", entries[0].isIntersecting);
  });
  observer.observe(document.querySelector("#contact"));
}

function productImageSrcset(image) {
  const filename = image.split("/").pop().replace(/\.(jpg|png)$/i, "");
  return [480, 768].map(width => `assets/images/products/optimized/${filename}-${width}.webp?v=${PRODUCT_IMAGE_VERSION} ${width}w`).join(", ");
}

function productCard(product, featured = false) {
  const displayBadge = product.available ? product.badge : "Currently Unavailable";
  const supportsEggless = product.category !== "signature-desserts";
  const selectedVariant = product.variants?.[0];
  const displayPrice = selectedVariant?.price ?? product.price;
  const displaySize = selectedVariant?.size ?? product.size;
  const labels = [
    ...(product.containsAlcohol ? ["Contains alcohol"] : []),
    ...product.dietaryLabels
  ];
  const message = productEnquiryMessage(product, selectedVariant);
  const variantControls = product.variants?.length
    ? `<fieldset class="product-variants"><legend>${product.category === "cupcake-collection" ? "Choose a size" : "Choose an option"}</legend><div class="variant-options">${product.variants.map((variant, index) => `
        <label class="variant-choice">
          <input type="radio" name="variant-${product.id}" value="${variant.id}" data-product-variant="${product.id}" ${index === 0 ? "checked" : ""}>
          <span>${variant.label}</span>
        </label>`).join("")}</div></fieldset>`
    : "";

  return `
    <article class="product-card${featured ? " featured-card" : ""}${product.available ? "" : " is-unavailable"}" data-product-id="${product.id}">
      <div class="product-image">
        ${displayBadge ? `<span class="badge" data-badge="${displayBadge}">${displayBadge}</span>` : ""}
        <picture>
          <source type="image/webp" srcset="${productImageSrcset(product.image)}" sizes="(min-width: 1280px) 395px, (min-width: 1024px) calc((100vw - 5rem) / 3), (min-width: 672px) calc((100vw - 4rem) / 2), calc(100vw - 2rem)">
          <img src="${product.image}?v=${PRODUCT_IMAGE_VERSION}" data-fallback="${FALLBACK_IMAGE}" alt="${product.imageAlt}" width="800" height="800" loading="lazy" decoding="async">
        </picture>
      </div>
      <div class="product-body">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-description">${product.description}</p>
        ${variantControls}
        ${supportsEggless ? `<div class="dietary-availability" aria-label="Eggless"><span><i class="dietary-symbol eggless" aria-hidden="true"></i>Eggless</span></div>` : ""}
        <div class="product-meta"><span class="product-size" data-product-size>${displaySize}</span><strong class="product-price" data-product-price aria-live="polite" aria-atomic="true">${formatPrice(displayPrice)}</strong></div>
        <div class="product-labels">${labels.map(label => `<span class="${label === "Contains alcohol" ? "alcohol" : ""}">${label}</span>`).join("")}</div>
        <a class="button product-action" data-product-enquiry href="${whatsappUrl(message)}" ${isWhatsAppConfigured() ? 'target="_blank" rel="noopener noreferrer"' : ""} ${product.available ? "" : 'aria-disabled="true" tabindex="-1"'} aria-label="Enquire on WhatsApp about ${product.name}, ${displaySize}, ${formatPrice(displayPrice)}">${product.available ? "Enquire on WhatsApp" : "Currently Unavailable"}</a>
      </div>
    </article>`;
}

function productEnquiryMessage(product, variant) {
  const option = variant ? ` (${variant.label.toLowerCase()})` : "";
  const size = variant?.size ?? product.size;
  const supportsEggless = product.category !== "signature-desserts";
  return `Hello Bhoomika, I would like to enquire about the ${product.name}${option}, ${size}, priced at ${formatPrice(variant?.price ?? product.price)}.${supportsEggless ? " Please confirm this is eggless." : ""}`;
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

function setupDiwaliSeason() {
  document.querySelectorAll("[data-diwali-season]").forEach(element => {
    element.hidden = !DIWALI_SEASON_ENABLED;
  });
  if (DIWALI_SEASON_ENABLED) renderDiwaliHampers();
}

function renderDiwaliHampers() {
  document.querySelector("[data-hamper-grid]").innerHTML = diwaliHampers.map(hamper => `
    <article class="hamper-card" aria-labelledby="${hamper.id}-title">
      <img class="hamper-image" src="${hamper.image}" alt="${hamper.imageAlt}" width="768" height="768" loading="lazy" decoding="async">
      <div class="hamper-body">
        <h3 id="${hamper.id}-title">${hamper.name}</h3>
        <p class="hamper-category">${hamper.category}</p>
        <p class="hamper-tagline">${hamper.tagline}</p>
        <h4>What's inside</h4>
        <ul>${hamper.inclusions.map(item => `<li>${item}</li>`).join("")}</ul>
        <a class="button" href="#contact" data-general-whatsapp data-whatsapp-message="Hi Bhoomika! I'm interested in the ${hamper.enquiryName}. Please share the price and availability." aria-label="Enquire on WhatsApp about ${hamper.name}">Enquire on WhatsApp</a>
      </div>
    </article>`).join("");
}

function installImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach(image => {
    image.addEventListener("error", () => {
      if (image.src.endsWith(FALLBACK_IMAGE)) return;
      image.closest("picture").querySelector("source").removeAttribute("srcset");
      image.src = image.dataset.fallback;
      image.closest(".product-card").classList.add("has-placeholder");
      image.alt = `${image.closest(".product-card").querySelector(".product-title").textContent}. Photo coming soon.`;
    });
  });
}

function setupProductVariants() {
  document.querySelectorAll("[data-product-variant]").forEach(control => {
    control.addEventListener("change", event => {
      const selectedControl = event.currentTarget;
      const card = selectedControl.closest(".product-card");
      const product = products.find(item => item.id === card.dataset.productId);
      const variant = product.variants.find(item => item.id === selectedControl.value);
      const price = card.querySelector("[data-product-price]");
      const size = card.querySelector("[data-product-size]");
      const enquiry = card.querySelector("[data-product-enquiry]");
      const message = productEnquiryMessage(product, variant);

      price.textContent = formatPrice(variant.price);
      size.textContent = variant.size ?? product.size;
      enquiry.href = whatsappUrl(message);
      enquiry.setAttribute("aria-label", `Enquire on WhatsApp about ${product.name}, ${variant.label}, ${variant.size ?? product.size}, ${formatPrice(variant.price)}`);
      if (variant.image) {
        const image = card.querySelector(".product-image img");
        card.querySelector(".product-image source").srcset = productImageSrcset(variant.image);
        image.src = `${variant.image}?v=${PRODUCT_IMAGE_VERSION}`;
        image.alt = variant.imageAlt ?? product.imageAlt;
        card.classList.remove("has-placeholder");
      }
    });
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

function setupAnchorScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const headerHeight = document.querySelector("[data-header]").offsetHeight;
    const categoryNav = document.querySelector("[data-category-nav]");
    const needsCategoryOffset = target.id === "menu" || target.id === "diwali-hampers" || target.classList.contains("menu-category");
    const offset = headerHeight + (needsCategoryOffset ? categoryNav.offsetHeight : 0) + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? "instant" : "smooth" });
    history.replaceState(null, "", `#${target.id}`);
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
  document.querySelectorAll(".menu-category, #diwali-hampers:not([hidden])").forEach(section => observer.observe(section));
}

function setupActions() {
  const generalMessage = "Hi Bhoomika! I was looking through The Dessert Table and would love to enquire about an order.";
  document.querySelectorAll("[data-general-whatsapp]").forEach(link => {
    link.href = whatsappUrl(link.dataset.whatsappMessage || generalMessage);
    if (isWhatsAppConfigured()) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
  document.querySelector("[data-whatsapp-display]").textContent = isWhatsAppConfigured()
    ? `WhatsApp: +${WHATSAPP_NUMBER}`
    : "WhatsApp number will be added soon.";

}

function validateCatalog() {
  const ids = new Set(products.map(product => product.id));
  if (products.length !== 12 || ids.size !== products.length) console.error("Product catalog validation failed.");
}

document.addEventListener("DOMContentLoaded", () => {
  validateCatalog();
  renderMenu();
  setupDiwaliSeason();
  renderTestimonials();
  setupTicker();
  setupWhatsAppHierarchy();
  setupProductVariants();
  setupNavigation();
  setupAnchorScrolling();
  setupCategoryTracking();
  setupActions();
  document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
});