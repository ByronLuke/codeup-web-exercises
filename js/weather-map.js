const lat= '29.890661';
const lon = '-97.911530';

let map;
let marker;

function fetchData (lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WM_KEY}` +
        `&appid=${WM_KEY}`)
        .then(data=> data.json())
        .then( data => {

            const weatherInfo = document.querySelector('#weather-info'); // Corrected ID
            weatherInfo.innerHTML = '';

            // Create a Bootstrap row
            const row = document.createElement('div');
            row.classList.add('row');

            for (let i = 0; i < data.list.length; i += 8) {
                const tempInF = parseInt((data.list[i].main.temp - 273.15) * 1.8 + 32);
                const feelsLikeTemp = parseInt((data.list[i].main.feels_like - 273.15) * 1.8 + 32);
                const maxTemp = parseInt((data.list[i].main.temp_max - 273.15) * 1.8 + 32);
                const weatherDescription = data.list[i].weather[0].description;
                const windSpeed = data.list[i].wind.speed;
                const date = data.list[i].dt_txt;

                // Create Bootstrap card
                const card = document.createElement('div');
                card.classList.add('card', 'm-3', 'weather-card', 'text-center'); // Adjusted the class and width
                for (let i = 0; i < data.list.length; i += 8) {
                    // ... (previous code)

                    // Determine weather condition and set background image accordingly
                    let backgroundImage;
                    if (weatherDescription.includes('rain') || weatherDescription.includes('showers')) {
                        backgroundImage = 'url("images/rain-image.jpeg")';
                    } else if (weatherDescription.includes('cloud')) {
                        backgroundImage = 'url("images/cloudy-images.jpeg")';
                    }else if (weatherDescription.includes('overcast')) {
                        backgroundImage = 'url("images/overcast-image.jpeg")';
                    }else if (weatherDescription.includes('snow')) {
                        backgroundImage = 'url("images/snow-image.jpeg")';
                    }
                    else if (weatherDescription.includes('sky')) {
                        backgroundImage = 'url("images/clear-sky-image.jpeg") ';
                    }
                        else {
                        // Default background image if condition is not met
                        backgroundImage = 'url("path/to/default-image.jpg")';
                    }

                    // Set the background image of the card
                    card.style.backgroundImage = backgroundImage;

                    // ... (remaining code)
                }





// Card body
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

// Card title (date)
                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');

// Format the date using toLocaleDateString
                const options = {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                cardTitle.innerText = new Date(date).toLocaleDateString('en-US', options);

// Card text (weather information)
                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.innerHTML = `
                                    Feels Like: ${feelsLikeTemp}&deg;F<br>
                                    Temperature: ${tempInF}&deg;F<br>
                                    Max Temperature: ${maxTemp}&deg;F<br>
                                    Description: ${weatherDescription}<br>
                                    Wind Speed: ${windSpeed} mph`;
// Append elements to card
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                card.appendChild(cardBody);

                // Append card to the column
                weatherInfo.appendChild(card);
            }
            reverseGeocode({ lat: lat, lng: lon }, MB_KEY).then(function (results) {
                const h4 = document.querySelector('h4')
                h4.innerHTML = `City name: ${results}`;
            });
        })
}
function mapBox(lat,lon){
    mapboxgl.accessToken = MB_KEY;
    map = new mapboxgl.Map(
        {
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lon, lat], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });

    marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([lon, lat])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        const newLat = lngLat.lat;
        const newLon = lngLat.lng;

        fetchData(newLat, newLon); // Call fetchData with the updated values

        return {
            lat: newLat, lon: newLon
        };
    }
    marker.on('dragend', onDragEnd);
}
function handleSearch() {
    const searchInput = document.querySelector('.form-control');
    const cityName = searchInput.value;

    // Replace 'YOUR_MAPBOX_API_KEY' with your actual Mapbox API key
    const geocodingAPIUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(cityName)}.json?access_token=${MB_KEY}`;

    fetch(geocodingAPIUrl)
        .then(response => response.json())
        .then(data => {
            const feature = data.features[0];
            if (feature) {
                const newLat = feature.center[1];
                const newLon = feature.center[0];

                map.flyTo({ center: [newLon, newLat], zoom: 9 });
                marker.setLngLat([newLon, newLat]);

                fetchData(newLat, newLon);
            } else {
                console.error('Location not found');
            }
        })
        .catch(error => console.error('Error during geocoding:', error));
}

// Add the event listener to the search button
document.getElementById('searchBtn').addEventListener('click', handleSearch);

mapBox(lat,lon);
fetchData(lat,lon)
