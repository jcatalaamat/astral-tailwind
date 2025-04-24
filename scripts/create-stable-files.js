import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const clientDir = path.join(distDir, 'client');
const assetsDir = path.join(clientDir, 'assets');
const distAssetsDir = path.join(distDir, 'assets');

// Ensure directories exist
if (!fs.existsSync(distDir)) {
  console.error('❌ Dist directory not found.');
  process.exit(1);
}

if (!fs.existsSync(clientDir)) {
  console.error('❌ Client directory not found.');
  process.exit(1);
}

if (!fs.existsSync(assetsDir)) {
  console.error('❌ Assets directory not found.');
  process.exit(1);
}

// Create dist/assets if it doesn't exist
if (!fs.existsSync(distAssetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true });
}

// Find the virtual entry file
const entryFiles = fs.readdirSync(assetsDir)
  .filter(file => file.startsWith('_virtual_one-entry-') && file.endsWith('.js'));

if (entryFiles.length === 0) {
  console.error('❌ No virtual entry file found.');
  process.exit(1);
}

const entryFile = entryFiles[0];
console.log(`✅ Found virtual entry file: ${entryFile}`);

// Create stable versions of the file
const stableEntryName = '_virtual_one-entry-stable.js';

// Client assets directory
console.log(`📝 Creating stable entry file in client assets: ${stableEntryName}`);
fs.copyFileSync(
  path.join(assetsDir, entryFile),
  path.join(assetsDir, stableEntryName)
);

// Dist assets directory
console.log(`📝 Creating stable entry file in dist assets: ${stableEntryName}`);
fs.copyFileSync(
  path.join(assetsDir, entryFile),
  path.join(distAssetsDir, stableEntryName)
);

// Dist root directory
console.log(`📝 Creating stable entry file in dist root`);
fs.copyFileSync(
  path.join(assetsDir, entryFile),
  path.join(distDir, stableEntryName)
);

// Root directory
console.log(`📝 Creating stable entry file in root directory`);
fs.copyFileSync(
  path.join(assetsDir, entryFile),
  path.join(rootDir, stableEntryName)
);

// Create a simple HTML file to load the stable entry
const simpleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loading Framework...</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #1c1917;
      color: white;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    }
  </style>
</head>
<body>
  <div id="message">Loading Framework...</div>
  <script>
    // Create a script element to load the entry file
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/${stableEntryName}';
    script.onerror = () => {
      document.getElementById('message').textContent = 'Failed to load framework';
    };
    document.body.appendChild(script);
  </script>
</body>
</html>`;

// Write the HTML file to the dist directory
fs.writeFileSync(path.join(distDir, 'framework-test.html'), simpleHtml);
console.log('✅ Created framework-test.html in dist directory');

console.log('✅ Stable files created successfully!'); 