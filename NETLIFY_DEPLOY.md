# Netlify Deployment Guide

## Quick Setup

1. **Install Netlify CLI** (if not installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

## Netlify Dashboard Setup

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub repository: `alinawaz-360/astrah`
4. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `20`

5. **Important**: Make sure `@netlify/plugin-nextjs` is installed:
   ```bash
   npm install --save-dev @netlify/plugin-nextjs
   ```

## If 404 Error Persists

1. Check that `netlify.toml` is in the root directory
2. Verify the plugin is installed: `npm list @netlify/plugin-nextjs`
3. Check Netlify build logs for errors
4. Ensure Node version is set to 20 in Netlify dashboard

## Environment Variables

If needed, add environment variables in Netlify Dashboard:
- Settings → Environment variables

## Build Settings

- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `.next`
