// Debug and fallback script for handling script load errors
window.addEventListener('DOMContentLoaded', function() {
  console.log('Debug script running - looking for missing scripts');
  
  // Function to check if a script exists
  function checkScriptExists(url) {
    return fetch(url, { method: 'HEAD' })
      .then(response => response.ok)
      .catch(() => false);
  }
  
  // Function to find an alternative script that matches a pattern
  function findMatchingScript(pattern) {
    if (!window.availableScripts) return null;
    return window.availableScripts.find(script => script.includes(pattern));
  }
  
  // First try to load the stable entry script
  const stableEntryPath = '/assets/_virtual_one-entry-stable.js';
  checkScriptExists(stableEntryPath).then(exists => {
    if (exists) {
      console.log('Stable entry script found, loading it');
      const script = document.createElement('script');
      script.type = 'module';
      script.src = stableEntryPath;
      document.body.appendChild(script);
    } else {
      // If stable script doesn't exist, check for other virtual entry scripts
      console.log('Stable entry script not found, looking for alternatives');
      
      // Check for scripts with the virtual entry pattern
      const scriptElements = document.querySelectorAll('script[src*="_virtual_one-entry-"]');
      if (scriptElements.length > 0) {
        const originalSrc = scriptElements[0].src;
        
        // Check if the script exists
        checkScriptExists(originalSrc).then(exists => {
          if (!exists) {
            console.log('Virtual entry script not found:', originalSrc);
            
            // Find an alternative
            const alternativeSrc = findMatchingScript('_virtual_one-entry-');
            if (alternativeSrc) {
              console.log('Found alternative virtual entry script:', alternativeSrc);
              
              // Create and add the script
              const newScript = document.createElement('script');
              newScript.type = 'module';
              newScript.src = alternativeSrc;
              document.body.appendChild(newScript);
              
              console.log('Alternative script added');
            }
          }
        });
      }
    }
  });
});

// Error event handler for script errors
window.addEventListener('error', function(event) {
  const target = event.target;
  
  // Check if it's a script load error
  if (target && target.tagName === 'SCRIPT' && event.target.src) {
    const scriptSrc = event.target.src;
    console.error('Script load error:', scriptSrc);
    
    // Try to recover by finding similar scripts from window.availableScripts
    if (window.availableScripts) {
      // For entry scripts
      if (scriptSrc.includes('_virtual_one-entry-')) {
        // First try the stable entry script
        const stableEntryPath = '/assets/_virtual_one-entry-stable.js';
        console.log('Attempting to load stable entry script:', stableEntryPath);
        const stableScript = document.createElement('script');
        stableScript.type = 'module';
        stableScript.src = stableEntryPath;
        stableScript.onerror = function() {
          // If stable script fails, try to find another alternative
          const entryScript = window.availableScripts.find(s => s.includes('_virtual_one-entry-'));
          if (entryScript && entryScript !== scriptSrc) {
            console.log('Attempting to load alternative entry script:', entryScript);
            const newScript = document.createElement('script');
            newScript.type = 'module';
            newScript.src = entryScript;
            document.body.appendChild(newScript);
          }
        };
        document.body.appendChild(stableScript);
      }
      
      // For index scripts
      if (scriptSrc.includes('index-')) {
        const indexScript = window.availableScripts.find(s => s.includes('index-'));
        if (indexScript && indexScript !== scriptSrc) {
          console.log('Attempting to load alternative index script:', indexScript);
          const newScript = document.createElement('script');
          newScript.type = 'module';
          newScript.src = indexScript;
          document.body.appendChild(newScript);
        }
      }
    }
  }
}, true);

// Log diagnostic information
console.log('Browser info:', navigator.userAgent);
console.log('Page URL:', window.location.href); 