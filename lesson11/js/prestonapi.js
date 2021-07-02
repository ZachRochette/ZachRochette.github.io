const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8e352917079519d2ec55d70cab208751&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current_temp').textContent = jsObject.main.temp;
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind_speed').textContent = jsObject.wind.speed;

// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);

});

/* 5 Days Forecast*/
const days = ["1", "2", "3", "4", "5"];
const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8e352917079519d2ec55d70cab208751';
fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const nextfive = jsObject.list.filter(dt => dt.dt_txt.includes('18:00:00'));
        let img = 'https://openweathermap.org/img/w/';
        i = 0
        nextfive.forEach(day => {
            
            let forcast = new Date(day.dt_txt);
            dayOfWeek = days[i];
            document.getElementById(dayOfWeek).textContent = dayNames[forcast.getDay()];
            ftemp = Math.round((day.main.temp - 273.15) * (9/5) + 32);
            document.getElementById("temp" + days[i]).textContent = ftemp;
            i++
        })
    })