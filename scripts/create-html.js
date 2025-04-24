import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const clientDir = path.join(distDir, 'client');

// HARDCODED for custom domain - no conditionals
const basePath = '/';
console.log(`Using hardcoded base path: ${basePath}`);

// Ensure the dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ Dist directory not found. Make sure the build completed successfully.');
  process.exit(1);
}

// Ensure the client directory exists
if (!fs.existsSync(clientDir)) {
  console.error('❌ Client directory not found. Make sure the build completed successfully.');
  process.exit(1);
}

// Find the CSS file
const assetsDir = path.join(clientDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('❌ Assets directory not found');
  process.exit(1);
}

const cssFiles = fs.readdirSync(assetsDir).filter(file => file.startsWith('base-updated-') && file.endsWith('.css'));
if (cssFiles.length === 0) {
  console.error('❌ CSS file not found');
  process.exit(1);
}
const cssFile = cssFiles[0];

// Find the JS files
let entryJsFiles = fs.readdirSync(assetsDir).filter(file => file.startsWith('_virtual_one-entry-') && file.endsWith('.js'));
if (entryJsFiles.length === 0) {
  console.error('❌ Entry JS file not found');
  process.exit(1);
}
const entryJsFile = entryJsFiles[0];
console.log(`✅ Found entry file: ${entryJsFile}`);

// Create dist/assets directory if it doesn't exist
const distAssetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(distAssetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true });
}

// Create a stable version of the entry file
console.log('📝 Creating stable entry file...');
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(distAssetsDir, '_virtual_one-entry-stable.js')
);

// Find index JS file
let indexJsFiles = fs.readdirSync(assetsDir).filter(file => 
  file.startsWith('index-') && 
  file.endsWith('.js') && 
  !file.includes('preload')
);
if (indexJsFiles.length === 0) {
  console.error('❌ Index JS file not found');
  process.exit(1);
}
const indexJsFile = indexJsFiles[0];

// Copy all assets to dist directory
console.log('📝 Copying assets to dist...');

// Copy favicon to dist root
if (fs.existsSync(path.join(clientDir, 'favicon.svg'))) {
  fs.copyFileSync(
    path.join(clientDir, 'favicon.svg'),
    path.join(distDir, 'favicon.svg')
  );
}

// Create CNAME file
console.log('📝 Creating CNAME file...');
fs.writeFileSync(path.join(distDir, 'CNAME'), 'astral-integration.com');

// Copy all JS and CSS files from client/assets to dist/assets
console.log('📝 Copying all JS and CSS files...');
const allClientAssets = fs.readdirSync(assetsDir);
allClientAssets.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.css')) {
    try {
      fs.copyFileSync(
        path.join(assetsDir, file),
        path.join(distAssetsDir, file)
      );
    } catch (error) {
      console.warn(`⚠️ Warning: Failed to copy ${file}: ${error.message}`);
    }
  }
});

// Copy debug.js file if it exists
if (fs.existsSync(path.join(rootDir, 'public', 'debug.js'))) {
  console.log('📝 Copying debug.js to dist/assets...');
  fs.copyFileSync(
    path.join(rootDir, 'public', 'debug.js'),
    path.join(distAssetsDir, 'debug.js')
  );
}

// Create the simplified HTML file
console.log('📝 Creating index.html files...');
const mainIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mirror Path</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/${cssFile}">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #1c1917;
    }
  </style>
  <script>
    // This ensures we can load scripts even if filenames change between builds
    window.entryFile = "${entryJsFile}";
    window.indexFile = "${indexJsFile}";
  </script>
  <script src="/assets/debug.js"></script>
  <script type="module" src="/assets/index-${indexJsFile.replace('index-', '')}"></script>
</head>
<body>
  <div id="root"></div>
  
  <noscript>
    <div style="color: white; padding: 20px; text-align: center;">
      JavaScript is required to run this app.
    </div>
  </noscript>
</body>
</html>`;

// Write the HTML files
fs.writeFileSync(path.join(distDir, 'index.html'), mainIndexHtml);
console.log('✅ Root index.html file created successfully!');

fs.writeFileSync(path.join(clientDir, 'index.html'), mainIndexHtml);
console.log('✅ Client index.html file created successfully!');

// List files in dist/assets for debugging
console.log('\n📋 Files in dist/assets:');
fs.readdirSync(distAssetsDir)
  .filter(file => file.includes('one-entry') || file.startsWith('index-'))
  .forEach(file => console.log(`  - ${file}`)); 