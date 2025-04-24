#!/bin/bash
set -e

# Build the project
echo "🔨 Building the project..."
yarn build

# Create HTML with correct paths
echo "🔨 Creating HTML files with correct paths..."
node scripts/create-html.js

# Copy everything to a deploy directory
echo "📦 Preparing deployment..."
rm -rf deploy
mkdir -p deploy
cp -r dist/* deploy/

# Push to gh-pages branch
echo "🚀 Deploying to GitHub Pages..."
cd deploy
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/jcatalaamat/astral-tailwind.git
git push -f origin gh-pages

echo "✅ Deployment complete! Site is deployed to https://astral-integration.com" 