#!/bin/bash

# Backup original file
cp index.html index.html.original

echo "Fixing all asset paths and opacity issues..."

# Fix all opacity:0 to opacity:1 (for images and elements that should be visible)
sed -i '' 's/style="opacity:0/style="opacity:1/g' index.html

# Fix logo paths - change from absolute to relative
sed -i '' 's|src="/merlin-logo.svg"|src="merlin-logo.svg"|g' index.html
sed -i '' 's|href="/merlin-logo.svg"|href="merlin-logo.svg"|g' index.html

# Fix other common asset paths
sed -i '' 's|src="/logo.svg"|src="logo.svg"|g' index.html
sed -i '' 's|href="/logo.svg"|href="logo.svg"|g' index.html

# Fix all local SVG paths
sed -i '' 's|src="/\([^/][^"]*\.svg\)"|src="\1"|g' index.html
sed -i '' 's|href="/\([^/][^"]*\.svg\)"|href="\1"|g' index.html

# Fix all local image paths (png, jpg, webp)
sed -i '' 's|src="/\([^/][^"]*\.\(png\|jpg\|jpeg\|webp\)\)"|src="\1"|g' index.html
sed -i '' 's|href="/\([^/][^"]*\.\(png\|jpg\|jpeg\|webp\)\)"|href="\1"|g' index.html

echo "Done! All paths fixed. Refresh your browser (Ctrl+Shift+R or Cmd+Shift+R to hard refresh)"
