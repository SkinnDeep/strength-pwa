# 🚀 Free Hosting & iPhone Installation Guide

## Why GitHub Pages is the Best Free Host for this PWA

When you want to run a **Progressive Web App (PWA) on iPhone**, the host **must** provide:
1. **Automatic Valid HTTPS (SSL):** Apple iOS Safari strictly refuses to register Service Workers or allow full PWA offline installation over insecure HTTP.
2. **Fast Static Delivery:** Gym basements have weak signals; you need instant caching from a global CDN.
3. **Zero Ads or Injected Scripts:** Old free web hosts like 50webs inject banner ads, have strict bandwidth limits, and make HTTPS configuration difficult.

**GitHub Pages**, **Cloudflare Pages**, and **Vercel** are 100% free, have built-in HTTPS, and take less than 2 minutes to set up.

---

## ⚡ Option 1: GitHub Pages (Recommended — 2 Minutes)

### Method A: Using Git in Terminal / Command Line
If you have a GitHub account:
1. Open PowerShell or Terminal and initialize git in this folder:
   ```powershell
   cd C:\Users\funny\.gemini\antigravity\scratch\strength-hiking-pwa
   git init
   git add .
   git commit -m "Initial commit of Strength & Hiking PWA"
   ```
2. Create a new empty repository on [github.com/new](https://github.com/new) named `strength-pwa` (keep it Public).
3. Link and push:
   ```powershell
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/strength-pwa.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to your repository:
   - Click **Settings** (top tab) → **Pages** (left sidebar).
   - Under **Build and deployment** > **Branch**, select `main` and folder `/(root)`.
   - Click **Save**.
5. Wait 60 seconds. GitHub will display your live URL:
   `https://YOUR_GITHUB_USERNAME.github.io/strength-pwa/`

---

### Method B: Uploading via Browser (No Command Line Needed)
1. Go to [github.com/new](https://github.com/new) and create a repository called `strength-pwa` (Public).
2. On the next screen, click **"uploading an existing file"**.
3. Drag and drop all files and the `icons` folder from `C:\Users\funny\.gemini\antigravity\scratch\strength-hiking-pwa`.
4. Click **Commit changes**.
5. Go to **Settings** → **Pages** → choose `main` branch → **Save**.

---

## ⚡ Option 2: Cloudflare Pages (Drag & Drop)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) (free account).
2. Choose **Direct Upload** (drag & drop the `strength-hiking-pwa` folder).
3. Cloudflare gives you a free instant URL like `strength-pwa.pages.dev` with ultra-fast CDN caching.

---

## 📱 How to Install as an App on iPhone

Once your site is live at your URL:
1. Open **Safari** on your iPhone (PWAs must be installed via Safari on iOS).
2. Visit your live URL.
3. Tap the **Share** button (the square with an arrow pointing upward at the bottom of Safari).
4. Scroll down the sheet and tap **Add to Home Screen**.
5. Tap **Add** in the top right corner.
6. The app icon will appear on your home screen. When you tap it, it launches **full-screen with no browser address bar**, keeps your screen awake, plays timer chimes, and works 100% offline in gym basements!
