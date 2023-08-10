let isEnabled = false;

chrome.storage.sync.get("isEnabled", (data) => {
  isEnabled = data.isEnabled || false; 
  updateButton();
});

function updateButton() {
  const toggleBtn = document.getElementById("toggleBtn");
  toggleBtn.textContent = isEnabled ? "Disable" : "Enable";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.addEventListener("click", () => {
    isEnabled = !isEnabled;
    updateButton();

    chrome.storage.sync.set({ isEnabled });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const files = isEnabled ? ["content.js"] : [];
      // chrome.scripting.executeScript({
      //   target: { tabId: tab.id },
      //   files: files,
      //   allFrames: true,
      //   matchAboutBlank: true,
      //   excludeGlobs: [
      //     "https://www.google.com/*",
      //     "https://www.youtube.com/*",
      //     "https://www.instagram.com/*",
      //     "https://www.facebook.com/*",
      //     "https://twitter.com/*",
      //     "https://web.whatsapp.com/*",
      //   ],
      // });
    });
  });
});
