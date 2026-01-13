# 🚀 Quick Deployment Guide

## FASTEST WAY: Netlify Drop (30 seconds)

1. **Open this link**: https://app.netlify.com/drop
2. **Drag these 3 files** into the browser window:
   - `index.html`
   - `styles.css`
   - `script.js`
3. **Wait 10 seconds** - Your site will be LIVE!
4. **Copy your URL** - Share it with anyone!

That's it! No signup, no installation needed.

---

## Alternative: Use PowerShell to Deploy

Run this command in PowerShell (from your project folder):

```powershell
# Create a deployment package
Compress-Archive -Path index.html,styles.css,script.js -DestinationPath portfolio.zip -Force
```

Then:
1. Go to https://app.netlify.com/drop
2. Drag `portfolio.zip` onto the page
3. Done! Your site is live.

---

## Need a Custom Domain?

After deploying, you can:
- Sign up for a free Netlify account
- Change your site name (e.g., `sandeep-portfolio.netlify.app`)
- Add a custom domain (if you have one)

---

## Your Files Are Ready!

✅ index.html
✅ styles.css
✅ script.js

Just drag them to Netlify Drop and you're live!

