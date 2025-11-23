const apiKey = "3c89c40e29d209dc8ade888d7457750f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBack = document.querySelector('.weatherBack');
const boxcolor = document.querySelector('.box');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    // Local time in the searched city (current time)
    let localTime = new Date((data.dt + data.timezone) * 1000);

    // Sunrise and sunset times adjusted for timezone
    let sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
    let sunset = new Date((data.sys.sunset + data.timezone) * 1000);

    // Decide if it's day or night
    let isDay = localTime >= sunrise && localTime < sunset;

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds" && isDay) {
        boxcolor.style.background = "linear-gradient(135deg,#00feba, #5b548a)";
        weatherIcon.src = "assets/clouds.png";
        weatherBack.src = "assets/cloudsBack.mp4"
    }
    else if (data.weather[0].main == "Clear" && isDay) {
        boxcolor.style.background = "linear-gradient(135deg,#00feba, #5b548a)";
        weatherIcon.src = "assets/clear.png";
        weatherBack.src = "assets/clearBack.mp4"
    }
    else if (data.weather[0].main == "Rain" && isDay) {
        boxcolor.style.background = "linear-gradient(135deg,#00feba, #5b548a)";
        weatherIcon.src = "assets/rain.png";
        weatherBack.src = "assets/rainBack.mp4"

    }
    else if (data.weather[0].main == "Drizzle" && isDay) {
        boxcolor.style.background = "linear-gradient(135deg,#00feba, #5b548a)";
        weatherIcon.src = "assets/drizzle.png";
        weatherBack.src = "assets/drizzleBack.gif"

    }
    else if (data.weather[0].main == "Mist" && isDay) {
        boxcolor.style.background = "linear-gradient(135deg,#00feba, #5b548a)";
        weatherIcon.src = "assets/mist.png";
        weatherBack.src = "assets/mistBack.mp4"

    }
    else if (data.weather[0].main == "Clouds" && (!isDay)) {
        boxcolor.style.background = "linear-gradient(135deg,#5b548a, #0f0550)";
        weatherIcon.src = "assets/cloudyNight.png";
        weatherBack.src = "assets/cloudyNightBack.mp4"

    }
    else if (data.weather[0].main == "Clear" && (!isDay)) {
        
        boxcolor.style.background = "linear-gradient(135deg,#5b548a, #0f0550)";
        weatherIcon.src = "assets/clearNight.png";
        weatherBack.src = "assets/clearNightBack.mp4"

    }
    else if (data.weather[0].main == "Rain" && (!isDay)) {
        boxcolor.style.background = "linear-gradient(135deg,#5b548a, #0f0550)";
        weatherIcon.src = "assets/rainyNight.png";
        weatherBack.src = "assets/rainyNightBack.mp4"

    }
    else if (data.weather[0].main == "Drizzle" && (!isDay)) {
        boxcolor.style.background = "linear-gradient(135deg,#5b548a, #0f0550)";
        weatherIcon.src = "assets/drizzleNight.png";
        weatherBack.src = "assets/drizzleNightBack.mp4"

    }
    else if (data.weather[0].main == "Mist" && (!isDay)) {
        boxcolor.style.background = "linear-gradient(135deg,#5b548a, #0f0550)";
        weatherIcon.src = "assets/mistyNight.png";
        weatherBack.src = "assets/mistyNightBack.mp4"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});