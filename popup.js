document.getElementById("checkBtn").addEventListener("click", async () => {
    const keyword = document.getElementById("keyword").value;
    const domain = document.getElementById("domain").value;
  
    if (!keyword || !domain) {
      document.getElementById("result").textContent = "Please enter both fields.";
      return;
    }
  
    // Open Google search in current tab
    const query = encodeURIComponent(keyword);
    const searchUrl = `https://www.google.com/search?q=${query}`;
  
    // Save domain to local storage so content script can access it
    chrome.storage.local.set({ targetDomain: domain }, () => {
      chrome.tabs.create({ url: searchUrl });
    });
  });
  
//   check chrom is define
if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.local.set({ targetDomain: domain }, () => {
      chrome.tabs.create({ url: searchUrl });
    });
  } else {
    console.error("Chrome extension context not available.");
  }