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

// Create multiple copies of the entry file in different locations
console.log('📝 Creating multiple copies of the stable entry file in various locations...');

// Create dist/assets directory if it doesn't exist
const distAssetsDir = path.join(distDir, 'assets');
if (!fs.existsSync(distAssetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true });
}

// 1. Copy to client/assets
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(assetsDir, stableEntryFile)
);

// 2. Copy to dist/assets
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(distAssetsDir, stableEntryFile)
);

// 3. Copy to dist root
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(distDir, stableEntryFile)
);

// 4. Copy to project root
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(rootDir, stableEntryFile)
);

// 5. Also create copies at the /assets/ root level
const rootAssetsDir = path.join(rootDir, 'assets');
if (!fs.existsSync(rootAssetsDir)) {
  fs.mkdirSync(rootAssetsDir, { recursive: true });
}
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(rootAssetsDir, stableEntryFile)
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
} else {
  // If CNAME doesn't exist in client dir, create one in dist dir
  console.log('📝 Creating CNAME file in dist directory...');
  fs.writeFileSync(
    path.join(distDir, 'CNAME'),
    'astral-integration.com'
  );
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

// Get all possible paths for entry scripts to use in fallback mechanism
const possibleEntryPaths = [
  `${basePath}assets/${stableEntryFile}`,
  `${basePath}${stableEntryFile}`,
  `${basePath}client/assets/${stableEntryFile}`,
  `${basePath}dist/assets/${stableEntryFile}`,
  `${basePath}dist/${stableEntryFile}`,
  `${basePath}client/assets/${entryJsFile}`,
  `${basePath}assets/${entryJsFile}`
];

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
    #loading-message {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 10px;
      text-align: center;
      z-index: 1000;
    }
  </style>
  <script>
    // Store possible entry paths for fallback mechanism
    window.possibleEntryPaths = ${JSON.stringify(possibleEntryPaths)};
    window.availableScripts = ${JSON.stringify(availableScripts)};
    window.scriptLoaded = false;

    // Function to try loading from multiple locations
    function loadFromMultipleLocations(paths, successCallback) {
      let loaded = false;
      let attemptCount = 0;
      
      function tryNextPath(index) {
        if (index >= paths.length || loaded) return;
        
        const path = paths[index];
        console.log('Attempting to load script from:', path);
        
        const script = document.createElement('script');
        script.type = 'module';
        script.src = path;
        
        script.onload = function() {
          console.log('Successfully loaded script from:', path);
          loaded = true;
          window.scriptLoaded = true;
          if (successCallback) successCallback();
        };
        
        script.onerror = function() {
          console.warn('Failed to load script from:', path);
          attemptCount++;
          // Try next path
          setTimeout(() => tryNextPath(index + 1), 50);
        };
        
        document.body.appendChild(script);
      }
      
      // Start trying paths
      tryNextPath(0);
    }

    // Show loading message
    window.addEventListener('DOMContentLoaded', function() {
      const loadingMessage = document.createElement('div');
      loadingMessage.id = 'loading-message';
      loadingMessage.textContent = 'Loading scripts...';
      document.body.appendChild(loadingMessage);
      
      // First try to load the entry script
      loadFromMultipleLocations(window.possibleEntryPaths, function() {
        // Once entry script is loaded, load index script
        loadScript('${basePath}assets/${indexJsFile}', 'index-');
      });
      
      // Hide loading message after 5 seconds regardless
      setTimeout(function() {
        const loadingMsg = document.getElementById('loading-message');
        if (loadingMsg) loadingMsg.style.display = 'none';
      }, 5000);
    });

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
  </script>
  <script src="${basePath}assets/debug.js"></script>
</head>
<body>
  <div id="root"></div>
  
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