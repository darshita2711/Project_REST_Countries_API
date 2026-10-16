import { initTheme } from './theme.js';
import { fetchCountries } from './api.js';
import { displayCountries } from './ui.js';

async function init() {
  initTheme();

  const countries = await fetchCountries();
  displayCountries(countries);
}

// application main point
init();