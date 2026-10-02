# RAMA TRAVELS — Editable Website

## Included
- Fully responsive HTML/CSS/JavaScript website
- Animated hero car + road
- Headlights with repeated blinking/glow animation
- Scroll-driven car movement and progress bar
- Fleet: Mini (4), Sedan (5), SUV/MPV (7–8), Luxury (5)
- 3 sample 3–4 day travel packages
- Customer reviews section
- Booking form
- WhatsApp booking redirection to +91 94506 27994
- Mobile navigation
- No backend/database required

## How to edit
Open `index.html` in VS Code, Notepad++, or any code editor.

### Business name / phone
Search for `RAMA TRAVELS` or `9450627994` and replace the text/number.

### Vehicles
Fleet cards are inside the `#fleet` section in `index.html`.

### Packages
Edit the cards inside the `#packages` section. You can change destination names, inclusions and buttons.

### Reviews
Edit the three `.review` articles in `index.html`.

### Colors / appearance
At the top of `style.css`, edit variables such as:
--accent
--bg
--panel
--text

### WhatsApp
The form submission is handled in `script.js`. The WhatsApp number is:
`919450627994`

Do not add spaces or the + sign inside the `wa.me` URL.

## Run
Double-click `index.html`, or use VS Code Live Server.

## Hosting
Upload `index.html`, `style.css`, and `script.js` to Netlify, Vercel, GitHub Pages, or any normal static hosting.

This is a static front-end website. Booking requests are opened in WhatsApp; they are not stored in a database.
