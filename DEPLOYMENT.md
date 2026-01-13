# Deploy Your Portfolio Website

Your website is ready to go live! Here are the easiest ways to deploy it:

## Option 1: Netlify Drop (Easiest - No account needed)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the entire folder containing `index.html`, `styles.css`, and `script.js`
3. Your site will be live instantly at a URL like `https://random-name-123.netlify.app`
4. (Optional) Sign up for a free account to customize the URL

## Option 2: Vercel (Very Easy)

1. Go to [Vercel](https://vercel.com)
2. Sign up for a free account (or use GitHub/Google)
3. Click "Add New Project"
4. Drag and drop your folder or use their CLI
5. Your site will be live immediately

## Option 3: GitHub Pages (Free Hosting)

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it (e.g., "portfolio-website")
4. Make it Public
5. Click "Create repository"

### Step 2: Upload Files
1. In your repository, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to Settings in your repository
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "main" branch and "/ (root)" folder
4. Click "Save"
5. Your site will be live at: `https://yourusername.github.io/portfolio-website`

## Option 4: Using Git Command Line

If you have Git installed:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow Option 3, Step 3 to enable GitHub Pages.

## Recommended: Netlify Drop
**This is the fastest method - takes less than 2 minutes!**

Just drag your folder to: https://app.netlify.com/drop

---

After deployment, you'll get a public URL that you can share with anyone!

