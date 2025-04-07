const apikey = "3c8ddf8295cd5b70aad241f932796c4b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
//const apiurl = "https://pro.openweathermap.org/data/2.5/forecast/hourly?&q="

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button ")
const weatherIcon = document.querySelector(".weathericon")

const backimg = document.querySelector(".box")


async function weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".hawa").innerHTML = Math.round(data.wind.speed) + "km/h";
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";



    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png"
       // backimg.style.backgroundImage = "url('cloud1.jpg')";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png"
       // backimg.style.backgroundImage = "url('sunny1.jpg')";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
       // backimg.style.backgroundImage = "url('rain1.jpg')";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png"
       // backimg.style.backgroundImage = "url('drizzle1.jpg')";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png"
       // backimg.style.backgroundImage = "url('mist1.jpg')";
    }

}

searchbtn = addEventListener("click", () => {
    weather(searchbox.value);
})

