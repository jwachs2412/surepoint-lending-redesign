# Deployment Guide - SurePoint Equity Website

## Prerequisites

- Node.js 18+ and npm 9+
- Git installed
- Account on deployment platform (Netlify or Vercel)

## Build Configuration

### Production Build

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Preview production build locally
npm run preview
```

The build outputs to the `dist/` directory.

### Build Optimization

- ✅ TypeScript compilation and type checking
- ✅ Vite production build with minification
- ✅ CSS optimization and tree-shaking
- ✅ Modern SASS compilation
- ✅ Asset optimization and hashing
- ✅ Code splitting for optimal loading

## Deployment Options

### Option 1: Netlify (Recommended for Simplicity)

#### Automatic Deployment (via Git)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

3. **Configuration is automatic** from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - SPA redirects configured
   - Security headers enabled
   - Asset caching optimized

#### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Custom Domain Setup

1. Go to Site settings → Domain management
2. Add custom domain: `surepointequity.com`
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Let's Encrypt)

### Option 2: Vercel

#### Automatic Deployment (via Git)

1. **Push to GitHub** (same as above)

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Configuration** from `vercel.json`:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Rewrites for SPA routing
   - Security headers

#### CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Option 3: Manual Deployment (Any Static Host)

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **Upload `dist/` directory** to your hosting provider:
   - AWS S3 + CloudFront
   - Google Cloud Storage
   - Azure Static Web Apps
   - GitHub Pages
   - Any static hosting service

3. **Configure routing**
   - Ensure all routes redirect to `index.html` for SPA routing
   - Example Nginx config:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

## Environment Variables

### Setup

1. Copy the example file:
   ```bash
   cp .env.example .env.production
   ```

2. Update values in `.env.production`

3. For Netlify/Vercel, add environment variables in dashboard:
   - Netlify: Site settings → Environment variables
   - Vercel: Project settings → Environment Variables

### Available Variables

```env
VITE_SITE_URL=https://surepointequity.com
VITE_SITE_NAME=SurePoint Equity
VITE_PHONE=888-445-3547
VITE_EMAIL=FLIP@surepointequity.com
```

## Post-Deployment Checklist

### Immediate Checks

- [ ] Site loads at production URL
- [ ] All pages accessible (Home, Our Process, About, FAQs, Contact)
- [ ] Navigation works correctly
- [ ] Mobile menu functions properly
- [ ] Forms display and validate correctly
- [ ] Google Maps loads on Contact page
- [ ] All images and assets load
- [ ] No console errors

### SEO & Performance

- [ ] Submit sitemap to Google Search Console
  - URL: `https://surepointequity.com/sitemap.xml`
- [ ] Verify robots.txt is accessible
  - URL: `https://surepointequity.com/robots.txt`
- [ ] Run Lighthouse audit (aim for 95+ scores)
- [ ] Test on PageSpeed Insights
- [ ] Verify structured data with Google Rich Results Test
- [ ] Check Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card with Twitter Card Validator

### Security

- [ ] HTTPS enabled and forced
- [ ] Security headers configured (check with securityheaders.com)
- [ ] CSP (Content Security Policy) working
- [ ] No mixed content warnings

### Analytics (Optional)

- [ ] Set up Google Analytics (if desired)
- [ ] Configure conversion tracking
- [ ] Set up Google Tag Manager (if needed)

### DNS & Domain

- [ ] Domain pointing to hosting provider
- [ ] SSL certificate active
- [ ] WWW redirect configured (www → non-www or vice versa)
- [ ] DNS propagation complete (check with dnschecker.org)

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml` for automated deployments:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run preview # Optional: test build
```

## Monitoring & Maintenance

### Regular Tasks

- **Weekly**: Check site uptime and performance
- **Monthly**: Review analytics and user behavior
- **Quarterly**: Update dependencies (`npm outdated`, `npm update`)
- **Yearly**: Review and update content

### Uptime Monitoring

Consider services like:
- UptimeRobot (free tier available)
- Pingdom
- StatusCake

### Error Tracking (Optional)

- Sentry
- LogRocket
- Rollbar

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Routing Issues (404s)

- Verify SPA redirect configuration
- Check `netlify.toml` or `vercel.json`
- Ensure all routes defined in React Router

### Performance Issues

```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer
```

### Environment Variable Not Working

- Prefix must be `VITE_`
- Restart dev server after adding variables
- Redeploy after changing production variables

## Support & Resources

### Documentation

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── robots.txt
└── sitemap.xml
```

## Production URLs

- **Production**: https://surepointequity.com
- **Sitemap**: https://surepointequity.com/sitemap.xml
- **Robots**: https://surepointequity.com/robots.txt

## Contact

For deployment issues or questions, contact the development team.

---

**Last Updated**: January 2024
**Build Version**: 0.1.0
