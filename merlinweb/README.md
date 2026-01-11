# Merlin Website - Real Scraped Version

Complete scrape of the actual https://www.merlin.computer/ website.

## 📁 Contents

### Main Files
- **index.html** (213KB) - Complete HTML from merlin.computer

### Assets Downloaded

#### CSS Files (_next/static/css/)
- e8bb85c79622cb96.css
- 437c25afc566ca52.css
- 5b576904c612405e.css
- 2a7720d7e5af1473.css
- d1ff741962ebd730.css
- 842b0deb3e90ec49.css

#### JavaScript Files (_next/static/chunks/)
- webpack-8a8edebc7e2803f7.js
- main-app-d41d56f775a954bb.js
- polyfills-42372ed130431b0a.js
- 1684-9b5c2c538fffc95a.js
- 4bd1b696-17827203d2b8e11c.js
- c16f53c3-a7a84a5757c5c1d6.js
- And 11+ more JavaScript chunks

#### Images (28 files in root directory)
**Main Images:**
- home.webp (987KB) - Dashboard screenshot
- light-bg.webp (340KB) - Background gradient
- gradient.png (389KB) - External gradient
- timeline.webp (484KB) - Timeline visualization
- everybody.webp (52KB) - Team photo
- place.webp (181KB) - Location image
- apps.webp (40KB) - Apps screenshot

**Logos & Icons:**
- merlin-logo.svg, logo.svg
- notion.svg, harvard.svg
- merlin-icon.png (75KB)
- 1.png, 2.png, 3.png (profile images)
- jason.png (22KB)

**SVG Icons:**
- date.svg, flight.svg, stay.svg
- lock.svg, how.svg, every.svg
- "try merlin.svg"

**Favicons:**
- favicon.ico
- favicon-16x16.png, favicon-32x32.png
- apple-touch-icon.png

#### Fonts (_next/static/media/)
- e4af272ccee01ff0-s.p.woff2 - Inter font

## 📊 Statistics

- **Total Size:** 4.9MB
- **Total Files:** 57
- **HTML:** 213KB
- **Images:** 28 files (~2.7MB)
- **JavaScript:** 18 files (~1.2MB)
- **CSS:** 6 files (~100KB)
- **Fonts:** 1 file

## 🚀 How to Run

### Option 1: Simple HTTP Server

```bash
# Using Python 3
python3 -m http.server 8000

# Open browser to:
# http://localhost:8000
```

### Option 2: Node.js

```bash
npx http-server

# Open browser to:
# http://localhost:8080
```

### Option 3: PHP

```bash
php -S localhost:8000

# Open browser to:
# http://localhost:8000
```

## ⚠️ Important Notes

**This is a Next.js website** - It requires:
1. A web server (cannot use file:// protocol)
2. JavaScript enabled
3. Modern browser

**Known Limitations:**
- Dynamic content may not work without backend
- Some API calls will fail (expected)
- This is a static snapshot of the site
- External services/integrations won't work

## 🏗️ Structure

```
real_merlin_scrape/
├── index.html                          # Main HTML file
├── *.webp, *.svg, *.png, *.ico        # 28 image files in root
├── _next/
│   └── static/
│       ├── css/                        # 6 CSS files
│       ├── chunks/                     # 18 JavaScript files
│       │   └── app/                    # App-specific JS
│       └── media/                      # Font files
└── README.md                           # This file
```

## 🔧 What's Included

✅ Complete HTML source
✅ All CSS stylesheets
✅ All JavaScript bundles
✅ All images (webp, svg, png)
✅ Font files
✅ Proper folder structure

## ❌ What's NOT Included

- Backend API endpoints
- Database data
- Authentication system
- Dynamic server-side rendering
- Third-party service integrations
- Build configuration files

## 📝 Technical Details

**Framework:** Next.js (React)
**Bundler:** Webpack
**Font:** Inter (custom subset)
**Image Format:** WebP, SVG, PNG

**Source:** https://www.merlin.computer/
**Scraped:** 2026-01-11

---

**Note:** This is a static scrape for educational/archival purposes. The original website is owned by Merlin Labs, Inc.
