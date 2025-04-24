import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Log the current working directory
console.log(`Working in directory: ${rootDir}`);

// Find all the JavaScript files in the gh-pages branch assets directory 
try {
  console.log('Listing available script files in gh-pages branch...');
  execSync('git ls-tree -r --name-only gh-pages | grep "\\.js$" | grep -v "node_modules"', { stdio: 'inherit' });
} catch (error) {
  console.warn('Could not list files from gh-pages branch:', error.message);
}

// Create a placeholder index.html that can automatically find and load the right scripts
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mirror Path</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #1c1917;
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
    
    #loading {
      padding: 2rem;
    }
    
    #root {
      width: 100%;
      height: 100%;
    }
  </style>
  <script>
    // Function to find all scripts matching a pattern
    async function findScript(pattern) {
      try {
        const response = await fetch('/assets/');
        if (!response.ok) return null;
        
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        const links = Array.from(doc.querySelectorAll('a'));
        const scriptNames = links
          .map(link => link.getAttribute('href'))
          .filter(href => href && href.endsWith('.js') && href.includes(pattern));
        
        return scriptNames.length > 0 ? '/assets/' + scriptNames[0] : null;
      } catch (e) {
        console.error('Error finding script:', e);
        return null;
      }
    }
    
    // Dynamically load the necessary scripts
    window.addEventListener('DOMContentLoaded', async function() {
      const loading = document.getElementById('loading');
      
      try {
        // Find the entry script
        const entryScript = await findScript('virtual_one-entry');
        if (entryScript) {
          const script1 = document.createElement('script');
          script1.type = 'module';
          script1.src = entryScript;
          document.body.appendChild(script1);
          loading.textContent = 'Loading application...';
        } else {
          loading.textContent = 'Could not find entry script';
        }
        
        // Find the index script
        const indexScript = await findScript('index-');
        if (indexScript) {
          const script2 = document.createElement('script');
          script2.type = 'module';
          script2.src = indexScript;
          document.body.appendChild(script2);
        }
      } catch (e) {
        loading.textContent = 'Error loading application: ' + e.message;
      }
    });
  </script>
</head>
<body>
  <div id="loading">Initializing application...</div>
  <div id="root"></div>
</body>
</html>`;

// Write the placeholder index.html to the root directory
fs.writeFileSync(path.join(rootDir, 'backup-index.html'), indexHtml);
console.log('✅ Created backup-index.html file');

// Create a script to list all assets
const listAssetsScript = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asset List</title>
  <style>
    body { font-family: monospace; padding: 1rem; }
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 0.5rem; }
    a { text-decoration: none; }
  </style>
</head>
<body>
  <h1>Available Assets</h1>
  <div id="asset-list">Loading...</div>

  <script>
    async function listAssets() {
      const assetList = document.getElementById('asset-list');
      
      try {
        const response = await fetch('/assets/');
        if (!response.ok) {
          assetList.textContent = 'Failed to load asset list';
          return;
        }
        
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        const links = Array.from(doc.querySelectorAll('a'));
        const assets = links
          .map(link => link.getAttribute('href'))
          .filter(href => href && (href.endsWith('.js') || href.endsWith('.css')));
        
        if (assets.length === 0) {
          assetList.textContent = 'No assets found';
          return;
        }
        
        const ul = document.createElement('ul');
        assets.forEach(asset => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '/assets/' + asset;
          a.textContent = asset;
          li.appendChild(a);
          ul.appendChild(li);
        });
        
        assetList.innerHTML = '';
        assetList.appendChild(ul);
      } catch (e) {
        assetList.textContent = 'Error: ' + e.message;
      }
    }
    
    listAssets();
  </script>
</body>
</html>
`;

// Write the asset list script
fs.writeFileSync(path.join(rootDir, 'assets.html'), listAssetsScript);
console.log('✅ Created assets.html file');

console.log('✅ Asset sync completed successfully!'); 