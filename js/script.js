import { fetchCountries } from './api.js';
import { displayCountries } from './ui.js';

async function init() 
{  
  const countries = await fetchCountries();
  displayCountries(countries);
}
init();