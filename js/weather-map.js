// These give the initial latitude and longitude for my location (San Marcos)
const lat= '29.890661';
const lon = '-97.911530';

// These are the variables for my mapbox map and marker, these are declared at the top so they are accessible throughout the code
let map;
let marker;

// Below is the function that I used to fetch the weather data using open weather map api and the weather map key
function fetchData (lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WM_KEY}` +
        `&appid=${WM_KEY}`)
        .then(data=> data.json())
        .then( data => {

            const weatherInfo = document.querySelector('#weather-info'); // Corrected ID
            weatherInfo.innerHTML = '';

            // We need to create the rows for the actual data from the weather service
            const row = document.createElement('div');
            row.classList.add('row');

            //aa forloop for every 8th entry (3hours*8=24hrs which is a day) to extract the info i wanted displayed
            for (let i = 0; i < data.list.length; i += 8) {
                const tempInF = parseInt((data.list[i].main.temp - 273.15) * 1.8 + 32);
                const feelsLikeTemp = parseInt((data.list[i].main.feels_like - 273.15) * 1.8 + 32);
                const maxTemp = parseInt((data.list[i].main.temp_max - 273.15) * 1.8 + 32);
                const weatherDescription = data.list[i].weather[0].description;
                const windSpeed = data.list[i].wind.speed;
                const date = data.list[i].dt_txt;

                // Displaying the info in cards so those need to be created
                const card = document.createElement('div');
                card.classList.add('card', 'm-3', 'weather-card', 'text-center');

                    // creating the background image for the card based off of what weather info comes in
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

                    // Set the background image of the card after judgement taken place
                    card.style.backgroundImage = backgroundImage;

                    //create card body as div
                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');

                    // create card title using the date
                    const cardTitle = document.createElement('h5');
                    cardTitle.classList.add('card-title');

                    // Format the date using toLocaleDateString (this took some time to look up)
                    const options = {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    cardTitle.innerText = new Date(date).toLocaleDateString('en-US', options);

                    // putting card text as p element then appending all title and text to card body then cardbody will need to be appended to the actual card
                    const cardText = document.createElement('p');
                    cardText.classList.add('card-text');
                    cardText.innerHTML = `
                                    Feels Like: ${feelsLikeTemp}&deg;F<br>
                                    Temperature: ${tempInF}&deg;F<br>
                                    Max Temperature: ${maxTemp}&deg;F<br>
                                    Description: ${weatherDescription}<br>
                                    Wind Speed: ${windSpeed} mph`;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                card.appendChild(cardBody);

                // Finally appending the card to the weather info id with class of row
                weatherInfo.appendChild(card);
            }
                // Found this info on the weathermap website and changed geocoder utils to only bring back city name then add that info to the heading to show the user where we are
                reverseGeocode({ lat: lat, lng: lon }, MB_KEY).then(function (results) {
                const h4 = document.querySelector('h4')
                h4.innerHTML = `City name: ${results}`;
            });
        })
}
// initializing the mapbox with the initial coordinates of san marcos
function mapBox(lat,lon){
    mapboxgl.accessToken = MB_KEY;
    map = new mapboxgl.Map(
        {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lon, lat],
            zoom: 9,
        });
    //creating the draggable marker on the map
    marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([lon, lat])
        .addTo(map);

    //once the marker is dragged we need to update coordinates
    function onDragEnd() {
        const lngLat = marker.getLngLat();
        const newLat = lngLat.lat;
        const newLon = lngLat.lng;

        // Call fetchData with the updated values
        fetchData(newLat, newLon);

        return {
            lat: newLat, lon: newLon
        };
    }
    //this is listening for the 'dragend' event
    marker.on('dragend', onDragEnd);
}


// this is for the user search for city name but upon actual use, it seems to work for zip code, country and other defining elements of the search location
function handleSearch() {
    const searchInput = document.querySelector('.form-control');
    const cityName = searchInput.value;

    //
    const geocodingAPIUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(cityName)}.json?access_token=${MB_KEY}`;

    //the flyto feature can be found at https://docs.mapbox.com/mapbox-gl-js/example/flyto/
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
}

// Add the event listener to the search button, when button clicked handlesearch function is used
document.getElementById('searchBtn').addEventListener('click', handleSearch);

//initialising the map and marker and weather data below with the long and latitude
mapBox(lat,lon);
fetchData(lat,lon)
