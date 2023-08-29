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
        })
      setCity('')
    }
  }

  return (
    <main className="h-[100vh] py-6 px-8 sm:px-16" style={{
      backgroundImage: "url('https://free4kwallpapers.com/uploads/originals/2017/10/11/mystic-mountains-wallpaper.jpg')",
      backgroundSize: "cover", 
      backgroundPosition: "",
    }}
  >
      <div className='flex flex-col items-center'>

        <h1 className='text-[1.5em] sm:text-[2.5em] font-bold py-10 sm:py-0 sm:pb-6'>
          Get The Current Weather
        </h1>
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyDown={searchCity}
          placeholder='Enter a city name...'
          type='text'
          className='sm:w-[22em] px-6 font-bold py-2 mb-10 sm:mb-6 bg-black bg-opacity-0 border-2 border-black rounded-full'
          >
          
        </input>

        <div className=''>
        { !!weather.name &&
          <WeatherCard
            city={weather.name}
            temperature={weather.main ? `${weather.main.temp}°C` : null}
            weather={weather.weather ? weather.weather[0].main : null}
            weatherDescription={weather.weather ? weather.weather[0].description : null}
            max={weather.main ? `Max.:${weather.main.temp_max}°` : null}
            min={weather.main ? `Min.:${weather.main.temp_min}°` : null}
            humidity={weather.weather ? `Humidity: ${weather.main.humidity}%` : null}
            wind={weather.weather ? `Wind speed: ${weather.wind.speed} km/h` : null}

          />}
        </div>
      </div>
    </main>
  )
}
