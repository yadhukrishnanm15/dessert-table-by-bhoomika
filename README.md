# The Dessert Table by Bhoomika

A mobile-first, static digital bakery menu that works by opening `index.html` directly and can be published through GitHub Pages. It includes 12 product cards across three categories, selectable tiramisu and cupcake options, automatic image fallbacks, WhatsApp enquiries, sharing, and a print-friendly A4 menu.

## Project files

```text
missionbakery/
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
|-- PRODUCT.md
|-- DESIGN.md
|-- .gitignore
`-- assets/
    |-- icons/favicon.svg
    `-- images/
        |-- logo/logo-placeholder.svg
        |-- hero/hero-placeholder.svg
        |-- social/social-share-placeholder.svg
        `-- products/product-placeholder.svg
```

## Preview the website

### Open directly

Double-click `index.html`. The menu works without a server or build process.

### Use VS Code Live Server

1. Install the **Live Server** extension in VS Code.
2. Open `index.html`.
3. Select **Go Live** in the VS Code status bar.
4. The website opens in your browser and refreshes after saved changes.

## First three changes to make

1. Replace `91XXXXXXXXXX` in `script.js` with the WhatsApp number, including country code and digits only.
2. Replace every visible `[ADD ...]` business placeholder in `index.html`.
3. Add real product and hero photographs using the exact filenames below.

## Change the brand

- **Bakery name and tagline:** Search `index.html` for the current text and replace every occurrence, including metadata and the print header.
- **Announcement:** Edit the element marked `data-announcement` in `index.html`.
- **Colors:** Edit the custom properties at the top of `styles.css`, such as `--cream`, `--rose`, and `--espresso`.

## Update contact details

- **WhatsApp:** Change `WHATSAPP_NUMBER` near the top of `script.js`. Use country code and digits only, without `+`, spaces, or punctuation.
- **Instagram and email:** Replace `[ADD INSTAGRAM URL]` and `[ADD EMAIL ADDRESS]` in `index.html`.
- Also replace the service area, lead time, pickup, delivery, custom-order, and payment placeholders in the ordering section.

Until a valid WhatsApp number is added, WhatsApp buttons safely return to the Contact section rather than opening a broken external link.

## Manage products

All displayed product information lives in the `products` array inside `script.js`.

- **Add a product:** Copy an existing product object, assign a unique `id`, and update all fields.
- **Change a product:** Find its `id`, then edit its fields.
- **Change a price:** Change the numeric `price` value without a rupee symbol or comma.
- **Change a badge:** Set `badge` to `Customer Favorite`, `Chef's Recommendation`, `New Arrival`, `Seasonal Special`, or `Limited Batch`.
- **Remove a badge:** Set `badge` to an empty string.
- **Mark unavailable:** Set `available: false`. The screen displays an unavailable state, and printing hides the item.
- **Feature a product:** Set `featured: true`. Featured items use the same data as the full menu.
- **Reorder products:** Change `sortOrder`; lower values appear first within the category.
- **Offer product choices:** Add a `variants` array with an `id`, `label`, and `price` to show accessible selectable options that update the price, size, image, and WhatsApp enquiry.

A commented future-product example is included below the live array.

## Add a category

1. Add an object to the `categories` array in `script.js` with a unique `id`, display `name`, and short `note`.
2. Use the same category `id` on its products.
3. Add a matching link to the sticky category navigation in `index.html`.

## Diwali hampers

The dedicated Diwali Hampers section appears directly after the menu. A
non-sticky, fully clickable seasonal banner below the header and above the
hero links directly to it, alongside a temporary sticky browse link.
The primary navigation stays evergreen.

Set `DIWALI_SEASON_ENABLED` near the top of `script.js` to `false` after the
season. This hides the banner, browse link, and entire hamper section
(including customisation) together and skips rendering the hamper cards
and loading their photographs. Set it back to `true` for the next season
after updating the content. There is no automatic expiry date. Seasonal
content stays hidden until JavaScript enables it, avoiding a flash of
out-of-season content or seasonal navigation without working cards.

Edit the `diwaliHampers` array in `script.js` to update names, categories,
taglines, inclusions, image descriptions, and enquiry names. These three
hampers are separate from the 12-item priced menu; no hamper prices or
availability claims are displayed.

The supplied photographs are stored in `assets/images/hampers/`:
`diwali-mithaas.png` (white box), `diwali-parampara.png` (kraft box), and
`diwali-utsav.png` (navy box). Keep replacement photographs square; the
layout displays the full image without cropping, reserves its dimensions,
and lazy-loads it. Cards stack on phones, use two columns on tablets, and
three columns on desktop.

Each card uses `data-general-whatsapp` and a hamper-specific
`data-whatsapp-message`, so the existing `setupActions()` and
`WHATSAPP_NUMBER` remain the single enquiry configuration.
The customisation copy and message are in `index.html` under
`hamper-customisation`. Enquiries ask for prices and availability directly.

## Brand story and customer testimonials

The brand story strip sits directly below the hero. Edit its seven phrases in
`index.html`; JavaScript creates an accessibility-hidden duplicate for the
seamless, continuous animation (60 seconds per sequence). The larger text is
paired with decorative, gold SVG line icons, not emoji or clickable badges.
The phrases include the owner-confirmed "Freshly baked" and "Premium ingredients"
claims; "Baked to order" describes how orders are prepared. "Small-batch" was
removed from the ticker only; the rest of the brand story is unchanged.
Keep these non-urgent brand messages in the strip rather than an interruptive pop-up.
Hover or keyboard focus pauses movement, and the pause button keeps it paused.
Movement also pauses when the ticker is offscreen or the browser tab is hidden.
Reduced-motion preferences show all seven phrases
in a static, wrapping strip instead.

All testimonial copy lives in the `testimonials` array near the top of
`script.js`. To add another testimonial, append an object with `headline`,
`quote`, `name`, and `featured: false`. It automatically appears in Kind Words.
Use `featured: true` for a pull-quote after Signature Desserts instead; it is
not repeated in Kind Words. Preserve the customer's wording verbatim.
Attribution deliberately displays **first names only**, without areas or bake
details. No customer locations or bake metadata are stored in this array.

The floating WhatsApp link uses the same `WHATSAPP_NUMBER`, `whatsappUrl`
helper, and default enquiry message as other general WhatsApp buttons.
Product-specific messages and custom-order messages remain distinct.
The floating control stays visible at Contact with a quieter ivory treatment.
It is icon-only on phones and a labelled pill on larger screens.
The stacked mobile testimonial column leaves space beside the floating icon.

These enhancements reuse the existing navy/cream/gold tokens, Bodoni Moda
and Manrope typography, `.section-shell`, `.section-label`, `.button`,
`.button-secondary`, focus styles, breakpoints, and WhatsApp setup.
Classic Tiramisu retains its existing `.badge` Customer Favorite treatment.
Existing product content and photography are unchanged.

### Before publishing testimonials

This implementation is a local preview, not consent verification or a deployment.
Confirm permission to publish each customer's first name and words, and confirm
the spellings Ria, Athira, Akanksha, and Debaroti before publishing.

The owner confirmed on 18 October 2026 that Chocolate Berry Dessert Tub and
Homemade Granola were custom orders and are planned for the menu later.
Their absence from the current menu is intentional, not a testimonial
discrepancy. Keep the supplied quotations unchanged; add these products only
when their menu details, prices, and availability are confirmed.

## Add real photographs

Place each photograph in `assets/images/products/` using the exact filename:

```text
tiramisu-rectangular-tub.jpg
blueberry-cupcakes.jpg
mini-blueberry-cupcakes.jpg
vanilla-cupcakes.jpg
mini-vanilla-cupcakes.jpg
coffee-walnut-tea-cake.jpg
banana-tea-cake.jpg
orange-tea-cake.jpg
chocolate-tea-cake.jpg
motichoor-tea-cake.jpg
gulab-jamun-tea-cake.jpg
marble-tea-cake.jpg
chocolate-chip-tea-cake.jpg
```

JavaScript replaces any missing image with `product-placeholder.svg`, so visitors never see a broken-image icon. Product photographs occupy a 4:3 responsive frame using `object-fit: cover`; no HTML or layout changes are required.

### Loading performance

Product photography uses responsive WebP copies in
`assets/images/products/optimized/`, at 480px and 768px widths, with the original
JPEG/PNG retained as a format fallback. The browser selects the appropriate
size for the viewport and pixel density; photographs remain lazy-loaded and
decode asynchronously. Variant selection updates both the WebP sources and
original image. Missing optimized images use the existing placeholder.

When replacing a photograph, also regenerate its two WebP copies, preserving
the aspect ratio and using the original filename stem plus `-480.webp` and
`-768.webp`. Export at quality 82 or comparable visual quality. Update
`PRODUCT_IMAGE_VERSION` when changing photographs to refresh cached images.

The same Allura, Bodoni Moda, and Manrope fonts are now served locally from
`assets/fonts/` as Latin WOFF2 files with `font-display: swap`; Bodoni Moda
retains its variable optical sizing and weight axes. The corresponding SIL
Open Font License notices are included alongside them. There is no external
Google Fonts stylesheet on the rendering path.

The Contact QR code is a local, lazy-loaded image in `assets/icons/menu-qr.png`
that always opens `https://thedesserttablebybhoomika.com/`, including from a
local preview. Regenerate this asset if the public menu URL changes. No
external QR-generation request is made when a visitor opens the site.

Replace `assets/images/hero/hero-placeholder.svg` with a real hero file only after updating the image path in `index.html`. Keep the same 3:2 landscape ratio.

### Image recommendations

- Product images: at least 1200 pixels on the longest edge. Square or 3:2 photographs work with the responsive crop.
- Hero image: 1800 × 1200 pixels, landscape.
- Prefer WebP; high-quality JPEG is accepted by the existing planned filenames.
- Keep product images under 300 KB and the hero under 500 KB where practical.
- Use indirect natural window light, a clean lens, true-to-life color, sharp focus, and a consistent cream, beige, wood, linen, or plate setting.
- Turn off harsh flash and heavy filters.
- Leave space around the dessert for cropping and capture square and landscape versions when possible.
- Do not use screenshots, watermarks, text overlays, or social-media interface elements.

## Print or save as PDF

Select **Print / Save Menu as PDF** on the website.

- In Chrome: choose **Destination > Save as PDF**, paper size **A4**, and save.
- In Microsoft Edge: choose **Printer > Save as PDF**, paper size **A4**, and save.

The print stylesheet uses the live product data, removes navigation and controls, avoids splitting product entries, hides unavailable products, and includes Important Information.

## Publish with GitHub Pages

1. Create a personal account at [github.com](https://github.com/).
2. Create a new repository named `dessert-table-by-bhoomika`.
3. Make it **Public** so GitHub Pages can publish it on the standard free setup.
4. Open the repository and choose **Add file > Upload files**.
5. Upload the contents of this folder so `index.html` is at the repository root.
6. Add a commit message and choose **Commit changes**.
7. Open **Settings** in the repository.
8. Under **Code and automation**, open **Pages**.
9. Under **Build and deployment**, choose **Deploy from a branch**.
10. Select the `main` branch and `/ (root)` folder, then save.
11. Wait a few minutes for publication.
12. GitHub Pages displays the public URL in the Pages settings.
13. Open that URL in an incognito or private window to confirm it works without sign-in.

### Update the published site

Upload or edit files in the repository and commit the changes. GitHub Pages republishes automatically after the commit.

### Connect a custom domain later

Buy a domain from a registrar, open repository **Settings > Pages**, enter the custom domain, and follow GitHub's displayed DNS instructions. Enable **Enforce HTTPS** after DNS verification succeeds.

Also replace the canonical and Open Graph URL placeholders in `index.html` with the final public address.

## Privacy and security

Every file committed to a public GitHub Pages repository may be publicly accessible. Never publish a home address, customer information, API key, token, password, private payment detail, or any other sensitive information. This site contains no analytics, trackers, backend, fake form, or hidden data collection.

## Troubleshooting

- **Broken WhatsApp button:** Confirm the number contains country code and digits only and no `X` characters.
- **Placeholder still appears:** Confirm the photograph's folder, spelling, capitalization, and extension exactly match `script.js`.
- **Changes not visible online:** Wait several minutes, refresh without cache, and check the repository's Pages deployment status.
- **GitHub Pages shows 404:** Confirm `index.html` is at the repository root and Pages uses `main` with `/ (root)`.
- **Mobile menu does not open:** Confirm `script.js` is in the same folder as `index.html` and the browser console shows no loading error.
- **External font unavailable:** The website falls back to Georgia and Segoe UI and remains readable.
- **Share does not open:** Unsupported browsers copy the current link to the clipboard instead.
