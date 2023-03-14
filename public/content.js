import { chrome } from 'chrome';
import { ethers } from 'ethers';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "GET_WALLET_ADDRESS") {
      // Check if the ethereum object is available
      if (!window.ethereum) {
        sendResponse({ walletAddress: "" });
        return;
      }
      // Connect to the Ethereum network using the injected provider (MetaMask)
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Get the signer (current account)
      provider.getSigner().getAddress().then((address) => {
        // Send the wallet address back to the background script
        sendResponse({ walletAddress: address });
      }).catch((err) => {
        console.log("Error fetching wallet address:", err);
        sendResponse({ walletAddress: "" });
      });
      // Return true to indicate that the response will be sent asynchronously
      return true;
    }
  });
  