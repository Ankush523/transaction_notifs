// import { chrome } from 'chrome';
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.type === "GET_WALLET_ADDRESS") {
//       // Send a message to the content script to fetch the wallet address
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.tabs.sendMessage(tabs[0].id, request, (response) => {
//           sendResponse(response);
//         });
//       });
//       // Return true to indicate that the response will be sent asynchronously
//       return true;
//     }
//   });
  