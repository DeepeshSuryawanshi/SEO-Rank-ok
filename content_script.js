chrome.storage.local.get("targetDomain", ({ targetDomain }) => {
    if (!targetDomain) return;
    const results = document.querySelectorAll("a[href]");
    
    let position = 0;
    let found = false;
   
    for (let i = 0; i < results.length; i++) {
      const href = results[i].href;
      if (href.includes("google.com")) continue; // skip internal links
      if (href.includes("google.co.in")) continue; // skip internal links

      console.log("Extention result",results[i],href)
      if (href.includes(targetDomain)) {
        position++;     
        alert(`✅ ${targetDomain} found at position #${position} in search results.`);
        found = true;
        break;
      } else if (href.startsWith("http")) {
        position++;
      }

    }
  
    if (!found) {
      alert(`❌ ${targetDomain} not found in the visible results.`);
    }
  
    // Clear stored domain
    chrome.storage.local.remove("targetDomain");
  });
  