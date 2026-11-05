// importScripts('ExtPay.js')
// const extpay = ExtPay('cdkagfnhcelbhdhmfeacblcpbbfdogio')
// extpay.startBackground()

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type !== "getLocalData") return;

  fetch("http://localhost:3000/api/messages")
    .then(async response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => sendResponse({ data 
    }
       
    ))
    .catch(error => sendResponse({ error: error.message }));

  return true; // Keep the message channel open for the async response
});