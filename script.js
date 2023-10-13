document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search");
    const location = document.getElementById("location")
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const wind = document.getElementById("wind");

    searchButton.addEventListener("click", function () {
        const city = searchInput.value;
        if (city) {
            getWeather(city);
        }
    });

    function getWeather(city) {
        const apiKey = "0db83138bfffc5599d46f1fcff33a2a5";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((searchInput.value = ""))
            .then((data) => {
                location.textContent = "Weather in " + data.name;
                temperature.textContent = `${(data.main.temp - 273.15).toFixed(2)}°C`;
                description.textContent = data.weather[0].description;
                wind.textContent = data.wind.speed + "  km/h";
                searchButton.on
            })
            .catch((error) => {
                // console.log("Error: ", error);
                location.textContent = "Location not found"
                temperature.textContent = "-";
                description.textContent = "-";
                wind.textContent = "-";
            });
    }

    searchInput.addEventListener("click", function () {
        clearField()
    });

    function clearField(){
        temperature.textContent = "";
        description.textContent = "";
        wind.textContent = "";
    }
});
