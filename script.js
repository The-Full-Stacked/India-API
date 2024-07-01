document.addEventListener('DOMContentLoaded', () => {          // Using the Fetch API to get data about "India" from the REST Countries API.
    fetch('https://restcountries.com/v3.1/name/Bharat')       // "Bharat" cuz the code didn't identify my country as "India" 
        .then(response => response.json())
        .then(data => {                                       // It was showing me some British Indian Ocean country instead
            const country = data[0];
            const countryInfo = document.getElementById('country-info');

            const flag = document.createElement('img');
            flag.src = country.flags.png;
            flag.alt = `Flag of ${country.name.common}`;
            flag.className = "w-32 mx-auto";

            const name = document.createElement('h2');           
            name.textContent = country.name.common;
            name.className = "text-3xl font-semibold mt-4";
                                                                // All the information needed for the desired country
            const capital = document.createElement('p');
            capital.textContent = `Capital: ${country.capital}`;
            capital.className = "text-lg mt-2";

            const region = document.createElement('p');
            region.textContent = `Region: ${country.region}`;
            region.className = "text-lg mt-2";

            const population = document.createElement('p');
            population.textContent = `Population: ${country.population.toLocaleString()}`;
            population.className = "text-lg mt-2";
                                                                                // Getting the google maps link
            const googleMapsLink = document.createElement('a');
            googleMapsLink.href = country.maps.googleMaps;
            googleMapsLink.textContent = "View on Google Maps";
            googleMapsLink.target = "_blank";
            googleMapsLink.className = "text-blue-500 underline mt-4 block";

            countryInfo.appendChild(flag);
            countryInfo.appendChild(name);
            countryInfo.appendChild(capital);
            countryInfo.appendChild(region);
            countryInfo.appendChild(population);
            countryInfo.appendChild(googleMapsLink);
        })
        .catch(error => console.error('Error fetching country data:', error));
});
