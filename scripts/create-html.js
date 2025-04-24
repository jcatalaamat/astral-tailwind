import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const clientDir = path.join(distDir, 'client');

// Use root path for all assets - much simpler for both development and production with custom domain
const basePath = '/';

console.log(`Using base path: ${basePath}`);

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

// Copy the entry file with a stable name to avoid hash mismatches
const stableEntryFile = '_virtual_one-entry-stable.js';
console.log(`📝 Creating stable entry file: ${stableEntryFile}`);
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(assetsDir, stableEntryFile)
);

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

// Copy main assets to dist root for simpler URLs
console.log('📝 Copying favicon.svg to dist root...');
if (fs.existsSync(path.join(clientDir, 'favicon.svg'))) {
  fs.copyFileSync(
    path.join(clientDir, 'favicon.svg'),
    path.join(distDir, 'favicon.svg')
  );
}

// Copy CNAME file from client to dist root if it exists
if (fs.existsSync(path.join(clientDir, 'CNAME'))) {
  console.log('📝 Copying CNAME to dist root...');
  fs.copyFileSync(
    path.join(clientDir, 'CNAME'),
    path.join(distDir, 'CNAME')
  );
}

// Also create CNAME file directly at the root directory (parent of dist)
// This ensures the CNAME is at the very root when deployed with GitHub Pages
console.log('📝 Creating CNAME file at repository root...');
fs.writeFileSync(
  path.join(rootDir, 'CNAME'),
  'astral-integration.com'
);

// Create assets directory in dist root if it doesn't exist
const distAssetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(distAssetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true });
}

// Copy ALL JS and CSS files from client/assets to dist/assets
console.log('📝 Copying all JS and CSS files to dist/assets...');
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

// Also copy the stable entry file to dist/assets
console.log('📝 Copying stable entry file to dist/assets...');
fs.copyFileSync(
  path.join(assetsDir, stableEntryFile),
  path.join(distAssetsDir, stableEntryFile)
);

// Copy debug.js file if it exists
if (fs.existsSync(path.join(rootDir, 'public', 'debug.js'))) {
  console.log('📝 Copying debug.js to dist/assets...');
  fs.copyFileSync(
    path.join(rootDir, 'public', 'debug.js'),
    path.join(distAssetsDir, 'debug.js')
  );
}

// Get all JS files in dist/assets for fallback mechanism
const availableScripts = fs.readdirSync(distAssetsDir)
  .filter(file => file.endsWith('.js'))
  .map(file => `${basePath}assets/${file}`);

// Create main index.html in dist directory with root-relative paths
console.log('📝 Creating index.html files...');

// Create a more robust index.html with clear script source attributes and fallback mechanism
const mainIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mirror Path</title>
  <link rel="icon" href="${basePath}favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${basePath}assets/${cssFile}">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #1c1917;
    }
  </style>
  <script>
    // Store available scripts for fallback mechanism
    window.availableScripts = ${JSON.stringify(availableScripts)};

    // Function to dynamically load script if the original one fails
    function loadScript(url, pattern) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = url;
      script.onerror = function() {
        console.error('Failed to load:', url);
        if (window.availableScripts) {
          const alternative = window.availableScripts.find(s => s.includes(pattern));
          if (alternative && alternative !== url) {
            console.log('Trying alternative:', alternative);
            loadScript(alternative, pattern);
          }
        }
      };
      document.body.appendChild(script);
      return script;
    }

    // Wait for DOM to be ready
    window.addEventListener('DOMContentLoaded', function() {
      // Load the stable entry script first
      const stableEntryPath = '${basePath}assets/${stableEntryFile}';
      const scriptStable = document.createElement('script');
      scriptStable.type = 'module';
      scriptStable.src = stableEntryPath;
      scriptStable.onerror = function() {
        console.error('Failed to load stable entry script, falling back to original');
        // If stable fails, try the original
        loadScript('${basePath}assets/${entryJsFile}', '_virtual_one-entry-');
      };
      document.body.appendChild(scriptStable);
      
      // Load the index script
      loadScript('${basePath}assets/${indexJsFile}', 'index-');
    });
  </script>
  <script src="${basePath}assets/debug.js"></script>
</head>
<body>
  <div id="root"></div>
  <!-- Original script references (not used, handled by loadScript function) -->
  <!-- Entry: ${entryJsFile} -->
  <!-- Stable Entry: ${stableEntryFile} -->
  <!-- Index: ${indexJsFile} -->
  
  <!-- Fallback link to backup version -->
  <noscript>
    <div style="color: white; padding: 20px; text-align: center;">
      JavaScript is required to run this app. If you're having issues, try the 
      <a href="/backup-index.html" style="color: lightblue;">backup version</a>.
    </div>
  </noscript>
</body>
</html>`;

// Create client index.html with the same paths
fs.writeFileSync(path.join(distDir, 'index.html'), mainIndexHtml);
console.log('✅ Root index.html file created successfully!');

// Also create a copy in the client directory
fs.writeFileSync(path.join(clientDir, 'index.html'), mainIndexHtml);
console.log('✅ Client index.html file created successfully!');

// List actual files in assets directory for debugging
console.log('\n📋 Files in dist/assets:');
fs.readdirSync(distAssetsDir)
  .filter(file => file.includes('one-entry') || file.startsWith('index-'))
  .forEach(file => console.log(`  - ${file}`)); 