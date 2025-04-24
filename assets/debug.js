// Debug and fallback script for handling script load errors
window.addEventListener('DOMContentLoaded', function() {
  console.log('Debug script running - loading entry script');
  
  // Try to load the entry script
  const scriptElement = document.createElement('script');
  scriptElement.type = 'module';
  scriptElement.src = '/assets/' + window.entryFile;
  
  // Fallback to find any virtual entry script if the specified one fails
  scriptElement.onerror = function() {
    console.log('Failed to load specified entry script, looking for alternatives');
    
    // Try with a stable name first
    const stableScript = document.createElement('script');
    stableScript.type = 'module';
    stableScript.src = '/assets/_virtual_one-entry-stable.js';
    
    stableScript.onerror = function() {
      console.log('Stable entry script also failed, searching for any entry script');
      // Last resort - fetch the assets directory and find any entry script
      fetch('/assets/')
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const links = Array.from(doc.querySelectorAll('a'));
          
          const entryFiles = links
            .map(link => link.getAttribute('href'))
            .filter(href => href && href.includes('_virtual_one-entry-') && href.endsWith('.js'));
          
          if (entryFiles.length > 0) {
            console.log('Found alternative entry script:', entryFiles[0]);
            const lastResortScript = document.createElement('script');
            lastResortScript.type = 'module';
            lastResortScript.src = '/assets/' + entryFiles[0];
            document.body.appendChild(lastResortScript);
          }
        })
        .catch(err => console.error('Error searching for entry scripts:', err));
    };
    
    document.body.appendChild(stableScript);
  };
  
  document.body.appendChild(scriptElement);
});

// Log diagnostic information
console.log('Browser info:', navigator.userAgent);
console.log('Page URL:', window.location.href); 