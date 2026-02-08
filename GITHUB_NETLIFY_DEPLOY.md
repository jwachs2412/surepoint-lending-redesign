# GitHub & Netlify Deployment Guide

## Current Status
✅ Git initialized
✅ Initial commit created (85 files, 17,662 lines)
✅ Branch: main

---

## Step 2: Push to GitHub

After creating your GitHub repository, run these commands:

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/surepoint-lending-redesign.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/jwachsma/surepoint-lending-redesign.git
git push -u origin main
```

You may be prompted to authenticate. If so:
- Enter your GitHub username
- For password, use a **Personal Access Token** (not your GitHub password)
- To create a token: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token

---

## Step 3: Deploy to Netlify

### Option A: Netlify UI (Easiest - Recommended)

1. **Go to Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign up or log in (can use GitHub account)

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the `surepoint-lending-redesign` repository

3. **Configure Build Settings** (Should auto-detect!)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Leave other settings as default

4. **Deploy Site**
   - Click "Deploy surepoint-lending-redesign"
   - Netlify will build and deploy (takes ~2 minutes)
   - You'll get a URL like: `https://surepoint-lending-abc123.netlify.app`

5. **Customize URL (Optional)**
   - Go to Site settings → Domain management → Options
   - Click "Edit site name"
   - Change to something like: `surepoint-lending-demo`
   - New URL: `https://surepoint-lending-demo.netlify.app`

### Option B: Netlify CLI (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## Step 4: Share with Client

Once deployed, you'll have a live URL you can share:

**Example URL**: `https://surepoint-lending-demo.netlify.app`

✅ **HTTPS enabled** (automatic)
✅ **Fast loading** (optimized build)
✅ **Mobile-friendly** (responsive design)
✅ **Professional** (custom domain available)

---

## Automatic Updates

**Continuous Deployment is now active!**

Every time you push to the `main` branch on GitHub:
1. Netlify automatically detects the change
2. Runs `npm run build`
3. Deploys the new version
4. Updates the live site

```bash
# Make changes, then:
git add .
git commit -m "Update homepage hero text"
git push

# Netlify auto-deploys in ~2 minutes!
```

---

## Environment Variables (If Needed)

If you need to set environment variables on Netlify:

1. Go to Site settings → Environment variables
2. Add your variables:
   - `VITE_SITE_URL` = `https://surepoint-lending-demo.netlify.app`
   - `VITE_PHONE` = `888-445-3547`
   - `VITE_EMAIL` = `FLIP@surepointequity.com`
3. Redeploy: Deploys → Trigger deploy → Deploy site

---

## Custom Domain (Optional)

To use a custom domain like `demo.surepointequity.com`:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS configuration instructions
5. HTTPS is automatically provisioned

---

## Troubleshooting

### Build fails on Netlify

Check the build log in Netlify. Common issues:
- Node version mismatch
- Missing dependencies

Fix: Add `netlify.toml` in project root (already included!):
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Site shows 404 for routes

This is already fixed in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Need to preview before deploying

```bash
# Build locally
npm run build

# Preview
npm run preview

# Opens at http://localhost:4173
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Push changes | `git add . && git commit -m "message" && git push` |
| View site | Visit your Netlify URL |
| View build logs | Netlify dashboard → Deploys |
| Rollback | Netlify dashboard → Deploys → Click old deploy → "Publish deploy" |

---

## What's Next?

1. ✅ Push to GitHub
2. ✅ Deploy to Netlify
3. ✅ Share URL with client
4. 📊 Optional: Run Lighthouse audit on live site
5. 🎨 Optional: Make updates based on client feedback

---

**Need help?** Check `DEPLOYMENT.md` for more detailed deployment information.
