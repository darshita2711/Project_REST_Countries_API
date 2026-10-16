import { initTheme } from './theme.js';
import { fetchCountries } from './api.js';
import { displayCountries,searchCountries, filterByRegion} from './ui.js';

// this is the main function
async function init() {
  // call the function for dark and light mode
  initTheme();
  
  // fetchcountries using countries variable
  const countries = await fetchCountries();

  // call this function for display the countries
  displayCountries(countries);

  // this is the search function for search the country
  searchCountries(countries);
  
  // shows filtervise countries on the cards
  filterByRegion(countries);
}

// application main point
init();