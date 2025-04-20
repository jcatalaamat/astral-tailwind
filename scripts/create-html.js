import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const clientDir = path.join(distDir, 'client');

// Ensure the client directory exists
if (!fs.existsSync(clientDir)) {
  console.error('❌ Client directory not found. Make sure the build completed successfully.');
  process.exit(1);
}

// Find the CSS file
const assetsDir = path.join(clientDir, 'assets');
const cssFiles = fs.readdirSync(assetsDir).filter(file => file.startsWith('base-updated-') && file.endsWith('.css'));
if (cssFiles.length === 0) {
  console.error('❌ CSS file not found');
  process.exit(1);
}
const cssFile = cssFiles[0];

// Find the JS files
const entryJsFiles = fs.readdirSync(assetsDir).filter(file => file.startsWith('_virtual_one-entry-') && file.endsWith('.js'));
if (entryJsFiles.length === 0) {
  console.error('❌ Entry JS file not found');
  process.exit(1);
}
const entryJsFile = entryJsFiles[0];

const indexJsFiles = fs.readdirSync(assetsDir).filter(file => 
  file.startsWith('index-') && 
  file.endsWith('.js') && 
  !file.includes('preload')
);
if (indexJsFiles.length === 0) {
  console.error('❌ Index JS file not found');
  process.exit(1);
}
const indexJsFile = indexJsFiles[0];

// Create main index.html in dist directory
console.log('📝 Creating index.html in dist directory...');
const mainIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mirror Path</title>
  <link rel="icon" href="/astral-tailwind/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/astral-tailwind/client/assets/${cssFile}">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #1c1917;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/astral-tailwind/client/assets/${entryJsFile}"></script>
  <script type="module" src="/astral-tailwind/client/assets/${indexJsFile}"></script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), mainIndexHtml);

console.log('✅ HTML file created successfully!'); 