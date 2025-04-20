#!/bin/bash
set -e

# Build the project
echo "🔨 Building the project..."
yarn build

# Create root index.html
echo "📝 Creating index.html file in the root for redirects..."
cat > index.html << EOL
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mirror Path</title>
  <link rel="icon" href="/astral-tailwind/favicon.svg" type="image/svg+xml">
  <!-- Redirect to the actual app entry point -->
  <meta http-equiv="refresh" content="0;url=/astral-tailwind/"/>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #1c1917;
      color: #f5f5f4;
      display: flex;
      height: 100vh;
      margin: 0;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .loading {
      padding: 2rem;
    }
    h1 {
      color: #d97706;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      color: #d6d3d1;
      max-width: 500px;
      margin: 0 auto;
    }
    a {
      color: #f59e0b;
      text-decoration: none;
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      border: 1px solid #f59e0b;
      border-radius: 2rem;
      transition: all 0.3s;
    }
    a:hover {
      background-color: #f59e0b;
      color: #1c1917;
    }
  </style>
</head>
<body>
  <div class="loading">
    <h1>The Mirror Path</h1>
    <p>Entering the Sacred Chamber...</p>
    <a href="/astral-tailwind/">Enter Manually</a>
  </div>
</body>
</html>
EOL

# Get CSS filename (it may change with each build)
CSS_FILE=$(find dist/assets -name "base-updated-*.css" | sed 's/.*\///')

# Get JS filenames (they may change with each build)
ENTRY_JS=$(find dist/assets -name "_virtual_one-entry-*.js" | sed 's/.*\///')
INDEX_JS=$(find dist/assets -name "index-*.js" | grep -v "preload" | head -n 1 | sed 's/.*\///')

# Copy everything to a deploy directory
echo "📦 Preparing deployment..."
rm -rf deploy
mkdir -p deploy
cp -r dist/* deploy/
cp index.html deploy/

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