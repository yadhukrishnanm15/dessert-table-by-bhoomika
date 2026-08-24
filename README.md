# The Dessert Table by Bhoomika

A mobile-first, static digital bakery menu that works by opening `index.html` directly and can be published through GitHub Pages. It includes 15 products, category browsing, automatic image fallbacks, WhatsApp enquiries, sharing, and a print-friendly A4 menu.

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

A commented future-product example is included below the live array.

## Add a category

1. Add an object to the `categories` array in `script.js` with a unique `id`, display `name`, and short `note`.
2. Use the same category `id` on its products.
3. Add a matching link to the sticky category navigation in `index.html`.

## Add real photographs

Place each photograph in `assets/images/products/` using the exact filename:

```text
tiramisu-with-alcohol.jpg
classic-tiramisu.jpg
blueberry-cupcakes.jpg
mini-blueberry-cupcakes.jpg
vanilla-cupcakes.jpg
mini-vanilla-cupcakes.jpg
lemon-blueberry-cake-500g.jpg
lemon-blueberry-cake-1kg.jpg
coffee-walnut-tea-cake.jpg
banana-tea-cake.jpg
orange-tea-cake.jpg
chocolate-tea-cake.jpg
blueberry-tea-cake.jpg
motichoor-tea-cake.jpg
gulab-jamun-tea-cake.jpg
```

The missing JPG files are intentional. JavaScript replaces a failed image with `product-placeholder.svg`, so visitors never see a broken-image icon. Product photographs later occupy the same square frame using `object-fit: cover`; no HTML or layout changes are required.

Replace `assets/images/hero/hero-placeholder.svg` with a real hero file only after updating the image path in `index.html`. Keep the same 3:2 landscape ratio.

### Image recommendations

- Product images: 1200 × 1200 pixels, square.
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
