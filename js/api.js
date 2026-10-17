import { API_KEY } from './secret.js';
import { ALL_COUNTRIES_URL } from './urls.js';
import { MESSAGES } from './messages.js';


const FALLBACK_URL = (typeof CONFIG !== "undefined" && CONFIG.LOCAL_DATA_FALLBACK)
  ? CONFIG.LOCAL_DATA_FALLBACK
  : "./data.json";

export async function fetchCountries() {
  try {
    // inside the response we getting all the countries list
    const response = await fetch(ALL_COUNTRIES_URL, {
      // this is for the authorization
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');}

    const result = await response.json();
    return result.data.objects;

    } catch (error) {
    console.warn('Primary API failed. Attempting fallback to local data...', error);
    
    try {
      // If primary fails, fetch from local fallback url
      const fallbackResponse = await fetch(FALLBACK_URL);

      if (!fallbackResponse.ok) {
        throw new Error('Failed to fetch local fallback data');
      }

      const fallbackResult = await fallbackResponse.json();
      
      // Handle data structure difference if your local JSON format differs slightly
      return fallbackResult.data?.objects || fallbackResult;

  } catch (fallbackError) {
    console.error('Error fetching countries:',fallbackError);
    
    const statusMessage = document.getElementById('status-message');
    if (statusMessage) {
      //  messages getting from message file
        statusMessage.textContent = MESSAGES.error;
    }
    
    return [];
  }
}
}