const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.68&lon=-53.89&exclude=hourly,minute&appid=8e352917079519d2ec55d70cab208751&units=imperial&lang=en"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.current.temp;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('condition').textContent = jsObject.current.weather[0].description;
        document.getElementById('wind_speed').textContent = jsObject.current.wind_speed;
        document.getElementById('alert').textContent = jsObject.alerts[0];
        
        // const imagesrc = 'http://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '@2x.png';  
        // const desc = jsObject.current.weather[0].description;  
        // document.getElementById('imagesrc').textContent = imagesrc;  
        // document.getElementById('icon').setAttribute('src', imagesrc);  
        // document.getElementById('icon').setAttribute('alt', desc);
        
});

    /* 3 day forecast */
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.68&lon=-53.89&appid=8e352917079519d2ec55d70cab208751&units=imperial";
fetch(forecastURL)
    .then((response) => response.json())
    .then ((rigbyForecast) => {
        const dayofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const threedays = rigbyForecast.list.filter(item => item.dt_txt.includes("18:00:00"));
        let num = 1;
        let imgurl = "https://openweathermap.org/img/wn/";
        threedays.forEach(day => {
            let forecastday = new Date(day.dt_txt);
            document.getElementById("day" + num).textContent = dayofweek[forecastday.getDay()];
            document.getElementById("temp" + num).textContent = Math.round(day.main.temp);
            let icon = document.getElementById("icon" + num);
            icon.setAttribute("src", imgurl + day.weather[0].icon + "@2x.png");
            icon.setAttribute("alt", day.weather[0].description);
            num ++;
    });
  });