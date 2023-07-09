import './style.css'

const MY_KEY = process.env.API_KEY

async function getCurrentWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${MY_KEY}&q=${city}`)
    const weatherData = await response.json()
    console.log(weatherData)
}

getCurrentWeather('Houston')
getCurrentWeather('Austin')
