import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

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

// Find the JS files - use a more robust approach to find entry files
console.log('🔍 Searching for entry JS files in client assets directory...');
let entryJsFiles = fs.readdirSync(assetsDir).filter(file => file.startsWith('_virtual_one-entry-') && file.endsWith('.js'));
if (entryJsFiles.length === 0) {
  // If not found in client assets, try looking in dist/assets too
  console.log('⚠️ Entry file not found in client assets, checking dist/assets...');
  if (fs.existsSync(distAssetsDir)) {
    entryJsFiles = fs.readdirSync(distAssetsDir).filter(file => file.startsWith('_virtual_one-entry-') && file.endsWith('.js'));
  }
}

// If still not found, search the entire dist directory
if (entryJsFiles.length === 0) {
  console.log('⚠️ Entry file not found in standard directories, performing recursive search...');
  try {
    // Use find command to search recursively (works on Unix-like systems)
    const { execSync } = require('child_process');
    const findResult = execSync(`find ${distDir} -name "_virtual_one-entry-*.js" | head -1`, { encoding: 'utf8' });
    
    if (findResult.trim()) {
      const foundPath = findResult.trim();
      console.log(`✅ Found entry file through recursive search: ${foundPath}`);
      entryJsFiles = [path.basename(foundPath)];
    }
  } catch (error) {
    console.log(`⚠️ Error during recursive search: ${error.message}`);
  }
}

if (entryJsFiles.length === 0) {
  console.error('❌ Entry JS file not found after extensive search');
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

// Create stable files in both dist/assets and dist root for maximum compatibility
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(distAssetsDir, '_virtual_one-entry-stable.js')
);

// Also copy to dist root for direct access
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(distDir, '_virtual_one-entry-stable.js')
);

// Copy the actual hashed entry file to the root directory too
console.log(`📝 Copying hashed entry file ${entryJsFile} to dist root...`);
fs.copyFileSync(
  path.join(assetsDir, entryJsFile),
  path.join(distDir, entryJsFile)
);

// Write a file with the current entry file name for debugging
fs.writeFileSync(
  path.join(distDir, 'entry-file-info.txt'),
  `Current entry file: ${entryJsFile}\nDeployed: ${new Date().toISOString()}\n`
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
    .error-message {
      display: none;
      color: white;
      background-color: rgba(0,0,0,0.8);
      padding: 20px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      text-align: center;
    }
    .error-message a {
      color: #f59e0b;
      text-decoration: underline;
    }
  </style>
  <script>
    // Keep track of entry file loading attempts
    window.__entryLoadAttempts = 0;
    window.__maxEntryLoadAttempts = 5;
    
    // Handle script loading with fallbacks
    function loadScript(src, onError) {
      console.log('Attempting to load:', src);
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = src;
        script.onload = resolve;
        script.onerror = onError || reject;
        document.head.appendChild(script);
      });
    }
    
    // Function to try multiple paths for the entry file
    function tryEntryFilePaths() {
      window.__entryLoadAttempts++;
      
      // Known specific entry file paths to try (some hardcoded for compatibility)
      const specificPaths = [
        '/assets/${entryJsFile}',
        '/${entryJsFile}',
        '/assets/_virtual_one-entry-stable.js',
        '/_virtual_one-entry-stable.js',
        '/assets/_virtual_one-entry-BqB3kyap.js', // Add common known hashes
        '/_virtual_one-entry-BqB3kyap.js',
        '/assets/_virtual_one-entry-CinwSNtH.js',
        '/_virtual_one-entry-CinwSNtH.js'
      ];
      
      // Try each specific path in sequence
      return specificPaths.reduce(
        (p, path) => p.catch(() => loadScript(path)),
        Promise.reject()
      ).catch(() => {
        // If we've tried too many times, show an error and suggest the debug page
        if (window.__entryLoadAttempts >= window.__maxEntryLoadAttempts) {
          console.error('Failed to load entry script after multiple attempts');
          const errorElement = document.createElement('div');
          errorElement.className = 'error-message';
          errorElement.innerHTML = 'Having trouble loading the site? <a href="/debug.html">Click here to troubleshoot</a>';
          document.body.appendChild(errorElement);
          errorElement.style.display = 'block';
          throw new Error('All entry file paths failed');
        }
        
        // Try looking for any entry script dynamically
        return searchForEntryFiles();
      });
    }
    
    // Search for entry files dynamically
    function searchForEntryFiles() {
      return new Promise((resolve, reject) => {
        // Try to fetch entry-file-info.txt which might contain the path
        fetch('/entry-file-info.txt')
          .then(response => response.text())
          .then(text => {
            // Extract file paths from the text
            const matches = text.match(/\/_virtual_one-entry-[a-zA-Z0-9]+\.js/g);
            if (matches && matches.length > 0) {
              console.log('Found entry files in info.txt:', matches);
              // Try each file path
              return matches.reduce(
                (p, path) => p.catch(() => loadScript(path)), 
                Promise.reject()
              );
            }
            throw new Error('No entry files found in info.txt');
          })
          .then(resolve)
          .catch(reject);
      });
    }
    
    // Start loading process
    tryEntryFilePaths()
      .catch(err => {
        console.error('All entry file loading attempts failed:', err);
      });
    
    // Load the index script with retries
    loadScript('/assets/${indexJsFile}')
      .catch(() => {
        // Try the root path
        return loadScript('/${indexJsFile}');
      })
      .catch(err => {
        console.error('Failed to load index script:', err);
      });
  </script>
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

// List entry files in dist root for debugging
console.log('\n📋 Entry files in dist root:');
fs.readdirSync(distDir)
  .filter(file => file.includes('one-entry') || file.startsWith('index-'))
  .forEach(file => console.log(`  - ${file}`)); 