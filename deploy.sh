#!/bin/bash
set -e

# Build the project
echo "🔨 Building the project..."
yarn build

# Check if we're deploying with a custom domain
# For now, we'll force CUSTOM_DOMAIN to true since we know we're using astral-integration.com
export CUSTOM_DOMAIN=true
BASE_PATH="/"
echo "🌐 Using custom domain: astral-integration.com"

# Create CNAME file
echo "📝 Creating CNAME file for custom domain..."
echo "astral-integration.com" > dist/CNAME

# Skip creating redirecting index.html, we'll copy the main one instead
echo "📝 Skipping redirect creation, we'll use the actual app index.html"

# Rebuild the HTML files with the correct base path
echo "🔨 Rebuilding HTML files with correct base path..."
node scripts/create-html.js

# Copy everything to a deploy directory
echo "📦 Preparing deployment..."
rm -rf deploy
mkdir -p deploy
cp -r dist/* deploy/

# Get CSS filename (it may change with each build)
CSS_FILE=$(find dist/assets -name "base-updated-*.css" | sed 's/.*\///')

# Get JS filenames (they may change with each build)
ENTRY_JS=$(find dist/assets -name "_virtual_one-entry-*.js" | sed 's/.*\///')
INDEX_JS=$(find dist/assets -name "index-*.js" | grep -v "preload" | head -n 1 | sed 's/.*\///')

# Push to gh-pages branch
echo "🚀 Deploying to GitHub Pages..."
cd deploy
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/jcatalaamat/astral-tailwind.git
git push -f origin gh-pages

echo "✅ Deployment complete! Your site will be available at https://jcatalaamat.github.io/astral-tailwind/" 