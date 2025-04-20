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

// Create root index.html
console.log('📝 Creating root index.html...');
const rootIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mirror Path</title>
  <link rel="icon" href="/astral-tailwind/favicon.svg" type="image/svg+xml">
  <!-- Redirect to the actual app entry point -->
  <meta http-equiv="refresh" content="0;url=/astral-tailwind/client/"/>
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
    <a href="/astral-tailwind/client/">Enter Manually</a>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(rootDir, 'index.html'), rootIndexHtml);

// Create client index.html
console.log('📝 Creating client index.html...');
const clientIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Mirror Path</title>
  <link rel="icon" href="/astral-tailwind/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="assets/${cssFile}">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="assets/${entryJsFile}"></script>
  <script type="module" src="assets/${indexJsFile}"></script>
</body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), clientIndexHtml);

// Move index.html to dist
console.log('📝 Copying index.html to dist directory...');
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));

console.log('✅ HTML files created successfully!'); 