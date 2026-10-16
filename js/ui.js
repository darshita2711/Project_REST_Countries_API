// displaycontries for showing all countries in html
export function displayCountries(countriesList) {
  const container = document.getElementById('countries-container');
  const statusMessage = document.getElementById('status-message');

  if (statusMessage) statusMessage.style.display = 'none';
  container.innerHTML = '';

  if (!countriesList?.length) return;
  
  // apply all country card with there name and design
  countriesList.forEach(country => {
    const card = document.createElement('div');
    card.className = 'country-card';

    card.innerHTML = `
      <img src="${country.flag?.url_png || ''}" alt="${country.names?.common || 'Flag'}">
      <div class="country-info">
        <h3>${country.names?.common || 'Unknown'}</h3>
        <p><span>Population:</span> ${Number(country.population || 0).toLocaleString()}</p>
        <p><span>Region:</span> ${country.region || 'N/A'}</p>
        <p><span>Capital:</span> ${country.capitals?.[0]?.name || 'N/A'}</p>
      </div>
    `;
    
    // inside container add the card for display
    container.appendChild(card);
  });
}

// searchCountries for search country if you want any data perticluar country
export function searchCountries(countries) {
  const searchInput = document.querySelector('#country-search');
  if (!searchInput) return;
  // for serch country match the name here
  searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    const filtered = countries.filter(country => {
      const countryName = country.names?.common || '';
      return countryName.toLowerCase().includes(searchText);
    });

    // again call this function to display exact country
    displayCountries(filtered);
  });
}


// Filter countries by region
export function filterByRegion(countries) {
  const regionFilter = document.querySelector('#region-select');

  if (!regionFilter) return;

  // filter countries region vise
  regionFilter.addEventListener('change', (e) => {
    const selectedRegion = e.target.value;
    const filtered = countries.filter(country => {
      return selectedRegion === '' || country.region === selectedRegion;
    });
    
    // this is display the filterd countries 
    displayCountries(filtered);
  });
}