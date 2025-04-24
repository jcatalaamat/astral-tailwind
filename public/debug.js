// Debug and fallback script for handling script load errors
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
        const entryScript = window.availableScripts.find(s => s.includes('_virtual_one-entry-'));
        if (entryScript) {
          console.log('Attempting to load alternative entry script:', entryScript);
          const newScript = document.createElement('script');
          newScript.type = 'module';
          newScript.src = entryScript;
          document.body.appendChild(newScript);
        }
      }
      
      // For index scripts
      if (scriptSrc.includes('index-')) {
        const indexScript = window.availableScripts.find(s => s.includes('index-'));
        if (indexScript) {
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