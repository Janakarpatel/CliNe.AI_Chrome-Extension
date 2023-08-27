
chrome.storage.sync.get("isEnabled", (data) => {
  const isEnabled = data.isEnabled || false;
  
  if (isEnabled) {
    const h1Element = document.querySelector("h1");

    if (h1Element !== null) {
      const h1Text = h1Element.textContent;

      fetch('https://127.0.0.1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({text: h1Text})
      })
      .then(response => response.json())
      .then(data => {
        if (data.label === 'clickbait') {
          alert("CliNe says... Clickbait, Be Aware!");
        } else {
          alert("CliNe says... Not Clickbait, Happy Browsing!");
        }
      })
      .catch(error => console.error(error));
    } else {
      console.log("No h1 element found");
    }
  }
});
