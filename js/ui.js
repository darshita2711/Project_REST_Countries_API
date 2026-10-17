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

    const flagUrl = 
      country.flags?.svg || 
      country.flags?.png || 
      country.flag?.url_svg || 
      country.flag?.url_png || 
      country.flag || '';

    const countryName = 
      country.names?.common || 
      country.name?.common || 
      country.name || 
      'Unknown';
    card.innerHTML = `
      <img src="${flagUrl}" alt="${country.names?.common || 'Flag'}" onerror="this.src='';">
      <div class="country-info">
        <h3>${countryName}</h3>
        <p><span>Population:</span> ${Number(country.population || 0).toLocaleString()}</p>
        <p><span>Region:</span> ${country.region || 'N/A'}</p>
        <p><span>Capital:</span> ${country.capitals?.[0]?.name || 'N/A'}</p>
      </div>
    `;
    card.addEventListener('click', () => {
      showDetailView(country);
    });
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


export function showDetailView(country) {
  const flagUrl = country.flags?.svg || country.flags?.png || country.flag?.url_svg || country.flag?.url_png || country.flag || '';
  const name = country.names?.common || country.name?.common || country.name || 'Unknown';
  const capital = country.capitals?.[0]?.name || country.capital?.[0] || 'N/A';
  const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A';

  // Populate detail content
  document.getElementById('country-details-content').innerHTML = `
    <img src="${flagUrl}" alt="${name} flag">
    <div class="detail-content">
      <h2>${name}</h2>
      <p><span>Population:</span> ${Number(country.population || 0).toLocaleString()}</p>
      <p><span>Region:</span> ${country.region || 'N/A'}</p>
      <p><span>Sub Region:</span> ${country.subregion || 'N/A'}</p>
      <p><span>Capital:</span> ${capital}</p>
      <p><span>Currencies:</span> ${currencies}</p>
    </div>
  `;

  // Toggle visibility using your HTML elements
  const searchInput = document.querySelector('#country-search');
  const regionSelect = document.querySelector('#region-select');
  const countriesContainer = document.getElementById('countries-container');
  const detailsSection = document.getElementById('country-details');

  if (searchInput) searchInput.style.display = 'none';
  if (regionSelect) regionSelect.style.display = 'none';
  if (countriesContainer) countriesContainer.style.display = 'none';
  if (detailsSection) detailsSection.hidden = false;

  // Back button event
  const backButton = document.getElementById('back-button');
  if (backButton) {
    backButton.onclick = () => {
      console.log("kkk")
      if (detailsSection) detailsSection.hidden = true;
      if (countriesContainer) countriesContainer.style.display = '';
      if (searchInput) searchInput.style.display = '';
      if (regionSelect) regionSelect.style.display = '';
    };
  }
}