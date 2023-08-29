'use client'
import React, { useEffect, useState } from 'react'
import WeatherCard from '@/components/weatherCard'

export default function Home() {
  let weatherKey = process.env.NEXT_PUBLIC_WEATHER_KEY
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherKey}`



  const searchCity = (event) => {
    if (event.key === 'Enter') {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        console.log(":0 la new data", data)
      })
      setCity('')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
      value={city}
      onChange={event => setCity(event.target.value)}
      onKeyDown={searchCity}
      placeholder='Enter a city name'
      type='text'
      className='px-5 py-2 border-2 border-black rounded-full'>
      </input>
      <div className=''>

        <WeatherCard
          city={weather.name}
          temperature={weather.main ? `${weather.main.temp}°C` : null}
          weather={weather.weather ? weather.weather[0].main : null}
          humidity={weather.weather ? `${weather.main.humidity}%` : null}
          wind={weather.weather ? `${weather.wind.speed}` : null}

        />
      </div>
    </main>
  )
}
