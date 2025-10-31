# 🚀 WealthWatch Deployment Guide

## Quick Deploy (5 Minutes)

Your app is ready to deploy! Follow these simple steps:

---

## Step 1: Deploy to Railway (2 minutes)

### Option A: One-Click Deploy
1. Click this button: [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/wealthwatch)
2. Or go to: **https://railway.app/new**
3. Click **"Deploy from GitHub repo"**
4. Login with GitHub
5. Select repository: **`joyjamesswamy/IA3-WEBTECH`**
6. Click **"Deploy Now"**

### Railway will automatically:
- Detect your `railway.json` config
- Build your app with `npm install && npm run build`
- Start your app with `npm start`
- Assign a free `.railway.app` domain

---

## Step 2: Set Up MongoDB Atlas (3 minutes)

### Quick Setup:
1. Go to: **https://www.mongodb.com/cloud/atlas/register**
2. Click **"Sign up with Google"** (fastest)
3. Choose **"Build a Database"** → **"Free M0 Cluster"**
4. Select **AWS** provider + closest region
5. Click **"Create Cluster"** (wait 2-3 minutes)

### Get Connection String:
1. Click **"Database Access"** (left sidebar)
   - Add user: `wealthwatch` / Generate password → **Copy password!**
2. Click **"Network Access"** (left sidebar)
   - Add IP: `0.0.0.0/0` (Allow from anywhere)
3. Go to **"Database"** → Click **"Connect"**
   - Choose **"Connect your application"**
   - Copy connection string:
   ```
   mongodb+srv://wealthwatch:<password>@cluster0.xxxxx.mongodb.net/
   ```
4. Replace `<password>` with your actual password
5. Add database name: `mongodb+srv://wealthwatch:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/wealthwatch`

---

## Step 3: Configure Environment Variables

1. Go back to **Railway Dashboard**
2. Click your deployed project
3. Go to **"Variables"** tab
4. Add these variables:

```
MONGODB_URI = mongodb+srv://wealthwatch:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/wealthwatch
NODE_ENV = production
PORT = 3000
```

5. Click **"Redeploy"** (Railway will restart with new variables)

---

## Step 4: Get Your Live URL! 🎉

1. In Railway Dashboard, go to **"Settings"** tab
2. Under **"Domains"**, click **"Generate Domain"**
3. Railway will give you a URL like:
   ```
   https://ia3-webtech-production.up.railway.app
   ```

**Your app is now LIVE!** 🚀

---

## Alternative: Deploy to Render (Free)

If Railway doesn't work, use Render:

1. Go to: **https://render.com/**
2. Sign up with GitHub
3. Click **"New +"** → **"Web Service"**
4. Connect repo: `joyjamesswamy/IA3-WEBTECH`
5. Render auto-detects `render.yaml`
6. Add environment variable: `MONGODB_URI` (from MongoDB Atlas)
7. Click **"Create Web Service"**
8. Get URL: `https://wealthwatch-xxxx.onrender.com`

---

## Troubleshooting

### Build fails?
- Check that `devDependencies` are installed (vite, esbuild)
- Verify `npm run build` works locally

### App crashes?
- Check `MONGODB_URI` is correct in Railway/Render variables
- Check logs in Railway Dashboard → "Deployments" → "View Logs"

### Can't connect to MongoDB?
- Verify Network Access allows `0.0.0.0/0`
- Check database user password is correct

---

## Your Repository
**GitHub**: https://github.com/joyjamesswamy/IA3-WEBTECH

## Support
- Railway Docs: https://docs.railway.app/
- MongoDB Atlas Docs: https://www.mongodb.com/docs/atlas/

---

**Estimated Total Time**: 5-7 minutes
**Cost**: $0 (100% Free tier)
