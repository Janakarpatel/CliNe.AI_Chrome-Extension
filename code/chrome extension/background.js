let isEnabled = true;

chrome.action.onClicked.addListener((tab) => {
  isEnabled = !isEnabled;

  if (isEnabled) {
    chrome.action.setIcon({
      path: {
        "128": "128.png"
      }
    });
  } else {
    chrome.action.setIcon({
      path: {
        "16": "16.png"
      }
    });
  }
});