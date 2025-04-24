// Debug and fallback script for handling script load errors
window.addEventListener('DOMContentLoaded', function() {
  console.log('Debug script running - loading entry script');
  
  // Try to load the entry script
  const scriptElement = document.createElement('script');
  scriptElement.type = 'module';
  scriptElement.src = '/assets/' + window.entryFile;
  
  // Fallback to find any virtual entry script if the specified one fails
  scriptElement.onerror = function() {
    console.log('Failed to load specified entry script, trying stable version');
    
    // Try with a stable name first
    const stableScript = document.createElement('script');
    stableScript.type = 'module';
    stableScript.src = '/assets/_virtual_one-entry-stable.js';
    
    stableScript.onerror = function() {
      console.log('Stable entry script in assets failed, trying root path');
      // Try the root path as last resort
      const rootStableScript = document.createElement('script');
      rootStableScript.type = 'module';
      rootStableScript.src = '/_virtual_one-entry-stable.js';
      
      rootStableScript.onerror = function() {
        console.error('All fallback attempts failed to load entry script');
      };
      
      document.body.appendChild(rootStableScript);
    };
    
    document.body.appendChild(stableScript);
  };
  
  document.body.appendChild(scriptElement);
});

// Log diagnostic information
console.log('Browser info:', navigator.userAgent);
console.log('Page URL:', window.location.href); 