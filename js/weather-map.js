const lat= '29.890661';
const lon = '-97.911530';
function fetchData (lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WM_KEY}` +
        `&appid=${WM_KEY}`)
        .then(data=> data.json())
        .then( data => {
            console.log(data.list[0].main.temp)
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

        return { lat: newLat, lon: newLon };
    }

    marker.on('dragend', onDragEnd);
}


mapBox(lat,lon);
fetchData(lat,lon)
