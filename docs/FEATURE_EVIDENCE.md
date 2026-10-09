# D4NGER POS — Feature & Screenshot Evidence Matrix

> v1.0.1 runtime bundle reviewed 2026-10-09. Exact archive: `D4NGER POS.rar`. Images are extracted directly from the user's `Screens.pdf`. A code path here proves an implementation is included in the payload, **not** that a device-level test passed.

| Screenshot asset | Original PDF | Demonstrates | Code pointer | Confidence |
|---|---|---|---|---|
| `assets/screens/login-users.webp` | page 1, top | User avatars + restaurant/terminal selection | `app/api/dist/identity.js` | SCREEN+CODE |
| `assets/screens/login-pin.webp` | page 1, bottom | On-screen PIN keypad | `app/api/dist/identity.js` | SCREEN+CODE |
| `assets/screens/pos-catalog.webp` | page 2, top | Visual color-coded menu and basket | `routes/pos.js`, `routes/catalog-admin.js` | SCREEN+CODE |
| `assets/screens/pos-modifiers.webp` | page 2, bottom | Adding modifiers and pricing | `services/effective-modifiers.js` | SCREEN+CODE |
| `assets/screens/hold-reason.webp` | page 3, top | Hold order with reason | `routes/held-orders.js` | SCREEN+CODE |
| `assets/screens/held-orders.webp` | page 3, bottom | List of held orders and resume/cancel | `routes/held-orders.js` | SCREEN+CODE |
| `assets/screens/held-cancel.webp` | page 4, top | Held-order cancellation reason dialog | `services/held-orders.js` | SCREEN+CODE |
| `assets/screens/order-history.webp` | page 4, bottom | Paid-order history and management | `services/order-history.js` | SCREEN+CODE |
| `assets/screens/sales-reports.webp` | page 5, top | Daily sales/products report | `services/reports.js` | SCREEN+CODE |
| `assets/screens/windows-startup.webp` | page 5, bottom | Windows startup application listing | `tools/D4NGER.Runtime.ps1` | SCREEN+CODE |
| `assets/screens/admin-icon-selection.webp` | page 6 | Admin visual editor | `routes/catalog-admin.js` | SCREEN+CODE |
| `assets/screens/admin-category-editor.webp` | page 7, top | Color/category/icon customization | `routes/catalog-admin.js` | SCREEN+CODE |
| `assets/screens/admin-product-editor.webp` | page 7, bottom | Product names, price and icon changes | `routes/catalog-admin.js` | SCREEN+CODE |
| `assets/screens/catalog-icon-library.webp` | page 8, top | Built-in icon library with automatic keywords | `services/catalog-icons.js` | SCREEN+CODE |
| `assets/screens/custom-icons.webp` | page 8, bottom | Add or edit custom icon entries | `routes/catalog-admin.js` | SCREEN+CODE |
| `assets/screens/receipt-branding.webp` | page 9, top | Restaurant identity and receipt preview | `routes/restaurant-profile.js` | SCREEN+CODE |
| `assets/screens/receipt-layout.webp` | page 9, bottom | Receipt size and visibility settings | `app/printer-worker/dist/print-layout.js` | SCREEN+CODE |
| `assets/screens/receipt-advanced.webp` | page 10, top | Advanced layout/order/spacing editor | `app/printer-worker/dist/print-layout.js` | SCREEN+CODE |
| `assets/screens/config-transfer.webp` | page 10, bottom | Config export/import | `services/config-transfer.js` | SCREEN+CODE |

### Important distinctions

- **Screenshot-only claims:** real Windows screenshots show the workflows, but not installer execution results or physical receipt tests.
- **Compiled-code claims:** `checkout.js` transaction/idempotency, `identity.js` PIN security, `worker.js` drawer safety, and backup/config-transfer services are visible; automated test outcomes are not included.
- **Pending evidence:** single-click installer executable, true app-specific UI zoom control, real printer/drawer smoke logs, and source-level verification.
- **Publishing:** do not copy the original RAR into a public Git repository.
