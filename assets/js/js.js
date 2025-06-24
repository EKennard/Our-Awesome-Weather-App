window.addEventListener('DOMContentLoaded', () => {

    // Your OpenWeatherMap API key
    const apiKey = 'e7d1f1b7c7046afd50a140282e07d35c';

    // Get references to elements in HTML
    const searchButton = document.getElementById('search');
    const inputText = document.getElementById('input-text'); // First input
    // const bgToggleInput = document.getElementById('bg-toggle'); // Second input (from second script)
    const container = document.getElementById("weather-animations");

    // Elements to show current weather
    const weatherInfo = document.getElementById('weather-info');
    const locationEl = document.getElementById('location');
    const iconEl = document.getElementById('weather-icon');
    const tempEl = document.getElementById('temperature');
    const feelsLikeEl = document.getElementById('feels-like');
    const weatherEl = document.getElementById('weather');
    const humidityEl = document.getElementById('humidity');
    const windEl = document.getElementById('wind-speed');

    // Element for forecast data
    const forecastInfo = document.getElementById('forecast-info');

    // Trigger on click
    searchButton.addEventListener('click', () => {
        clearAnimations();
        const city = inputText.value;
        if (city) {
            fetchWeatherData(city);
            fetchForecastData(city);
        }
    });

    // Trigger on Enter key
    inputText?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = inputText.value;
            if (city) {
                fetchWeatherData(city);
                fetchForecastData(city);
            }
        }
    });

    // This function fetches current weather data for the city from OpenWeatherMap
    async function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                alert('City not found!');
                return;
            }
            const data = await response.json();
            displayWeatherData(data);
            setTheme(data);
            return data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // This function fetches 5 day / 3 hour forecast data for the city
    async function fetchForecastData(city) {
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(forecastUrl);
            if (!response.ok) {
                alert('Forecast not found!');
                return;
            }
            const data = await response.json();
            displayForecastData(data);
            return data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // This function displays the current weather info on the page
    function displayWeatherData(data) {
        let dt = data.dt;
        let timezoneOffset = data.timezone * 1000;
        let localTimeStamp = (dt + data.timezone) * 1000;
        let dateTime = new Date(localTimeStamp);

        let localTime = dateTime.toLocaleTimeString(undefined);
        let localDate = dateTime.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });

        console.log(localTime);
        console.log(localDate);

        let weatherInfo = document.getElementById('weather-info');
        if (!weatherInfo) {
            weatherInfo = document.createElement('div');
            weatherInfo.id = 'weather-info';
            document.body.appendChild(weatherInfo);
        }

        //day/night
        let now = Math.floor(Date.now() / 1000);
        let sunrise = data.sys.sunrise;
        let sunset = data.sys.sunset;
        let nowLocal = now + data.timezone;
        let isDaytime = nowLocal > sunrise && nowLocal < sunset;
        console.log(sunrise);
        console.log(sunset);
        console.log(now);

        if (isDaytime) {
            document.documentElement.style.setProperty("--bg-color", "#48cae4");
            document.documentElement.style.setProperty("--font-color", "#23221f");
        } else {
            document.documentElement.style.setProperty("--bg-color", "#03045e");
            document.documentElement.style.setProperty("--font-color", "#ade8f4");
        }

        const container = document.getElementById("weather-animations");
        animateWeather(data.weather[0].main.toLowerCase());

        weatherInfo.innerHTML = `
        <h2>Weather for ${data.name}, ${data.sys.country}</h2>
        <img id="weather-icon"
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="${data.weather[0].description}"
        style="display: block; margin: 0 auto; width: 80px;" />
        <p><strong>Date:</strong> ${localDate}</p>
        <p><strong>Time:</strong> ${localTime}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Feels Like:</strong> ${data.main.feels_like}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

        weatherInfo.style.display = 'block';
        forecastInfo.style.display = 'block';
    }

    // This function displays the 5-day forecast in a carousel
    function displayForecastData(data) {
        let forecastInfo = document.getElementById('forecast-info');
        if (!forecastInfo) {
            forecastInfo = document.createElement('div');
            forecastInfo.id = 'forecast-info';
            document.body.appendChild(forecastInfo);
        }

        // Build daily forecast carousel
        let forecastHTML = `
        <h2 class="text-center my-4">5 Day Forecast</h2>
        <div id="forecastCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
    `;

        let daysShown = {};
        let daysCount = 0;

        for (let i = 0; i < data.list.length && daysCount < 5; i++) {
            const forecast = data.list[i];
            const date = forecast.dt_txt.split(' ')[0];
            if (!daysShown[date]) {
                daysShown[date] = true;
                const isActive = daysCount === 0 ? 'active' : '';
                daysCount++;
                forecastHTML += `
                <div class="carousel-item ${isActive}">
                    <div class="d-flex flex-column align-items-center forecast-card p-3">
                        <h3>${date}</h3>
                        <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" 
                             alt="${forecast.weather[0].description}" 
                             style="width: 60px;" />
                        <p>${forecast.main.temp}°C</p>
                        <p>${forecast.weather[0].main} (${forecast.weather[0].description})</p>
                    </div>
                </div>
            `;
            }
        }

        forecastHTML += `
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#forecastCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#forecastCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;

        forecastInfo.innerHTML = forecastHTML;
    }

    let rainInterval;
    let cloudInterval;
    let condition = "";

    function animateWeather(condition) {
        clearAnimations();
        if (condition.includes("rain")) {
            rainInterval = setInterval(raindrops, 200);
        }
        if (condition.includes("cloud")) {
            cloudInterval = setInterval(clouds, 5000);
        }
    }

    function clearAnimations() {
        clearInterval(rainInterval);
        clearInterval(cloudInterval);
        const raindrops = container.querySelectorAll('.raindrop');
        const clouds = container.querySelectorAll('.cloud');
        raindrops.forEach(drop => drop.remove());
        clouds.forEach(cloud => cloud.remove());
    }

    // function raindrops() {
    //     let drop = document.createElement("div");
    //     drop.classList.add("raindrop");
    //     let randomLeft = Math.random() * window.innerWidth;
    //     drop.style.left = randomLeft + "px";
    //     let fallSpeed = 0.5 + Math.random() * 0.5;
    //     drop.style.animationDuration = fallSpeed + "s";
    //     container.appendChild(drop);
    //     setTimeout(() => {
    //         container.removeChild(drop);
    //     }, 1000);
    // }

    function raindrops() {
        const drop = document.createElement("div");
        drop.classList.add("raindrop");
        drop.style.left = Math.random() * window.innerWidth + "px";
        const fallSpeed = 0.5 + Math.random() * 0.5;
        drop.style.animation = `fall ${fallSpeed}s linear`;
        drop.style.opacity = "1";
        container.appendChild(drop);
        setTimeout(() => {
            drop.style.transition = "opacity 0.5s ease";
            drop.style.opacity = "0";
            drop.style.transform = "translateY(100vh)";
        }, fallSpeed * 1000);
    }

    function clouds() {
        let cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.left = "-200px";
        let randomTop = Math.random() * window.innerHeight;
        cloud.style.top = randomTop + "px";
        let speed = 20 + Math.random() * 20;
        cloud.style.animationDuration = speed + "s";
        container.appendChild(cloud);
        setTimeout(() => {
            container.removeChild(cloud);
        }, 50000);
    }
});
