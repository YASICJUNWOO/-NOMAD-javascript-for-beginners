const API_KEY = "503cb7dbae22ffc0a8d0aa5d6e6eb5d2";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            const name = data.name;
            const w = data.weather[0].main;
            city.innerText = name;
            weather.innerText = w;
    } );
}

function onGeoError(){
    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);