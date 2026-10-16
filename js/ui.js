export function displayCountries(countriesList) {
  const container = document.getElementById('countries-container');
  const statusMessage = document.getElementById('status-message');

  if (statusMessage) statusMessage.style.display = 'none';
  container.innerHTML = '';

  if (!countriesList?.length) return;

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

    container.appendChild(card);
  });
}