const lat= '29.890661';
const lon = '-97.911530';

function fetchData (lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WM_KEY}` +
        `&appid=${WM_KEY}`)
        .then(data=> data.json())
        .then( data => {
            const div = document.querySelector('#weather-info')
            div.innerHTML = '';
            for (let i = 0; i < data.list.length; i += 8) {
                const p = document.createElement('p')
                const tempInF = parseInt((data.list[i].main.temp - 273.15) * 1.8 + 32);
                const feelsLikeTemp = parseInt((data.list[i].main.feels_like - 273.15) * 1.8 + 32)
                const maxTemp = parseInt((data.list[i].main.temp_max - 273.15) * 1.8 + 32)
                const weatherDescription = data.list[i].weather[0].description
                const windSpeed = data.list[i].wind.speed
                const date = data.list[i].dt_txt
                console.log(feelsLikeTemp + ' '+ tempInF+ ' ' + maxTemp+ ' ' + weatherDescription+ ' ' + windSpeed+ ' ' + date)
                p.innerHTML = feelsLikeTemp + ' '+ tempInF+ ' ' + maxTemp+ ' ' + weatherDescription+ ' ' + windSpeed+ ' ' + date;
                div.appendChild(p)
            }
            reverseGeocode({ lat: lat, lng: lon }, MB_KEY).then(function (results) {
                const h2 = document.querySelector('h2')
                h2.innerHTML = `City name: ${results}`;
            });
        })
}
function mapBox(lat,lon){  mapboxgl.accessToken = MB_KEY;
    const map = new mapboxgl.Map(
        {
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lon, lat], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });
    const marker = new mapboxgl.Marker({
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

mapBox(lat,lon);
fetchData(lat,lon)
