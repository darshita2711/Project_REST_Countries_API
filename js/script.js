// js/script.js (Temporary Test)
import { API_KEY } from './secret.js';
import { ALL_COUNTRIES_URL } from './urls.js';

async function testApiConnection() {
  // 1. Explicitly define your URL and Header variables
  const url = ALL_COUNTRIES_URL;
  const requestHeaders = {
    'Authorization': `Bearer ${API_KEY}`
  };

  try {
    console.log("--- STARTING API TEST ---");
    console.log("Target URL:", url);
    console.log("Request Headers:", requestHeaders);

    // 2. Execute fetch using the url and headers
    const response = await fetch(url, {
      method: 'GET',
      headers: requestHeaders
    });

    if (!response.ok) {
      throw new Error(`Failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Test Successful! Data received:", data);

  } catch (error) {
    console.error("API Test Failed with error:", error);
  }
}
testApiConnection();