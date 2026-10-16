import { API_KEY } from './secret.js';
import { ALL_COUNTRIES_URL } from './urls.js';
import { MESSAGES } from './messages.js';

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
    console.error('Error fetching countries:', error);
    
    const statusMessage = document.getElementById('status-message');
    if (statusMessage) {
      //  messages getting from message file
        statusMessage.textContent = MESSAGES.error;
    }
    
    return [];
  }
}