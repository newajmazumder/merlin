#!/bin/bash

# Base URL
BASE_URL="https://www.merlin.computer"

# Create directories
mkdir -p _next/static/{css,chunks,media,chunks/app}
mkdir -p images

echo "Downloading CSS files..."
curl -s "${BASE_URL}/_next/static/css/e8bb85c79622cb96.css" -o _next/static/css/e8bb85c79622cb96.css
curl -s "${BASE_URL}/_next/static/css/437c25afc566ca52.css" -o _next/static/css/437c25afc566ca52.css
curl -s "${BASE_URL}/_next/static/css/5b576904c612405e.css" -o _next/static/css/5b576904c612405e.css
curl -s "${BASE_URL}/_next/static/css/2a7720d7e5af1473.css" -o _next/static/css/2a7720d7e5af1473.css
curl -s "${BASE_URL}/_next/static/css/d1ff741962ebd730.css" -o _next/static/css/d1ff741962ebd730.css
curl -s "${BASE_URL}/_next/static/css/842b0deb3e90ec49.css" -o _next/static/css/842b0deb3e90ec49.css

echo "Downloading JavaScript files..."
curl -s "${BASE_URL}/_next/static/chunks/webpack-8a8edebc7e2803f7.js" -o _next/static/chunks/webpack-8a8edebc7e2803f7.js
curl -s "${BASE_URL}/_next/static/chunks/4bd1b696-17827203d2b8e11c.js" -o _next/static/chunks/4bd1b696-17827203d2b8e11c.js
curl -s "${BASE_URL}/_next/static/chunks/1684-9b5c2c538fffc95a.js" -o _next/static/chunks/1684-9b5c2c538fffc95a.js
curl -s "${BASE_URL}/_next/static/chunks/main-app-d41d56f775a954bb.js" -o _next/static/chunks/main-app-d41d56f775a954bb.js
curl -s "${BASE_URL}/_next/static/chunks/c16f53c3-a7a84a5757c5c1d6.js" -o _next/static/chunks/c16f53c3-a7a84a5757c5c1d6.js
curl -s "${BASE_URL}/_next/static/chunks/polyfills-42372ed130431b0a.js" -o _next/static/chunks/polyfills-42372ed130431b0a.js

echo "Downloading images..."
curl -s "${BASE_URL}/light-bg.webp" -o images/light-bg.webp
curl -s "${BASE_URL}/home.webp" -o images/home.webp
curl -s "${BASE_URL}/merlin-logo.svg" -o images/merlin-logo.svg
curl -s "${BASE_URL}/notion.svg" -o images/notion.svg
curl -s "${BASE_URL}/harvard.svg" -o images/harvard.svg
curl -s "${BASE_URL}/jason.png" -o images/jason.png
curl -s "${BASE_URL}/date.svg" -o images/date.svg
curl -s "${BASE_URL}/flight.svg" -o images/flight.svg
curl -s "${BASE_URL}/apps.webp" -o images/apps.webp

echo "Downloading fonts..."
curl -s "${BASE_URL}/_next/static/media/e4af272ccee01ff0-s.p.woff2" -o _next/static/media/e4af272ccee01ff0-s.p.woff2

echo "Download complete!"
ls -lh images/
