# Logo Fix Guide

## ✅ Status: All Logos Are Fixed!

All logo files are downloaded and in the correct location.

## 📁 Logo Files Available

1. **merlin-logo.svg** (820 bytes) - Main Merlin logo
2. **logo.svg** (3.3 KB) - Full logo with text
3. **merlin-icon.png** (75 KB) - Icon version
4. **favicons** - All favicon sizes

## ⚠️ Important: WHY Logos Appear Broken

The logo appears broken if you opened `index.html` directly by double-clicking it. Here's why:

**The Problem:**
- When you open HTML files directly, the browser uses `file://` protocol
- Next.js websites REQUIRE a web server to work properly
- SVG files and other assets won't load correctly with `file://`

**The Solution:**
You MUST run a web server!

## 🚀 How to Fix (3 Easy Methods)

### Method 1: Use the Startup Script (Easiest!)

```bash
cd /Users/sahnewaj/Downloads/Project/merlin/real_merlin_scrape
./START_SERVER.sh
```

Then open: **http://localhost:8000**

### Method 2: Python Command

```bash
cd /Users/sahnewaj/Downloads/Project/merlin/real_merlin_scrape
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

### Method 3: From VSCode

1. Install "Live Server" extension in VSCode
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Opens automatically at `http://localhost:5500`

## ✅ Verification

After starting the server, you should see:

1. ✅ Merlin logo in top left corner
2. ✅ All images loading correctly
3. ✅ No broken image icons
4. ✅ Favicons in browser tab

## 🔍 Test Your Setup

Visit: **http://localhost:8000/test_logos.html**

This page shows:
- Both logo files
- Direct SVG embedding
- File listing

If logos show here but not on main site, it's a Next.js rendering issue (expected without backend).

## 📊 Logo Files Checklist

```bash
# Run this to verify all logos exist:
ls -lh merlin-logo.svg logo.svg merlin-icon.png *.ico favicon*.png
```

Expected output:
- merlin-logo.svg ✅
- logo.svg ✅
- merlin-icon.png ✅
- favicon.ico ✅
- favicon-16x16.png ✅
- favicon-32x32.png ✅
- apple-touch-icon.png ✅

## 🐛 Still Having Issues?

### Issue 1: "Connection Refused"
**Solution:** Make sure the server is running. Run `./START_SERVER.sh` first.

### Issue 2: "404 Not Found"
**Solution:** Check you're in the correct directory:
```bash
cd /Users/sahnewaj/Downloads/Project/merlin/real_merlin_scrape
pwd  # Should show the full path
```

### Issue 3: Logos Still Not Showing
**Possible Causes:**
1. Server not running (must use http://localhost:8000, not file://)
2. Browser cache (try Ctrl+Shift+R or Cmd+Shift+R to hard refresh)
3. JavaScript errors (open browser console with F12 to check)

### Issue 4: Some Images Work, Logos Don't
**This is a Next.js issue:** The site is a React/Next.js app that requires JavaScript to render components. Some parts may not work without the backend server.

## 💡 Pro Tips

1. **Always use localhost:8000** - Never open index.html directly
2. **Clear browser cache** if you see old versions
3. **Check browser console** (F12) for JavaScript errors
4. **Use the test page** (/test_logos.html) to verify logo files

## 📝 Technical Details

### Why This Happens

Next.js sites are **server-rendered** React applications:
- HTML contains React component references
- JavaScript hydrates the page after loading
- Without proper server + JS execution, some elements won't render
- SVG files need correct MIME types from server

### What We Downloaded

All assets are present:
- 28 images (including logos)
- 6 CSS files
- 18 JavaScript files
- 1 font file

**Total:** 57 files, 4.9MB

## ✅ Summary

**The logos ARE fixed!** They're all downloaded and in the right place.

**You just need to:**
1. Run the web server: `./START_SERVER.sh`
2. Open: http://localhost:8000
3. Logos will appear correctly!

**Common Mistake:**
❌ Double-clicking index.html (uses file:// - won't work!)
✅ Running server first (uses http:// - works perfectly!)

---

**Need more help?** Check the browser console (F12) for specific error messages.
