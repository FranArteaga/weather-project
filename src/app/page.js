'use client'
import React, { useEffect, useState } from 'react'
import WeatherCard from '@/components/weatherCard'

export default function Home() {
  let weatherUrl = process.env.NEXT_PUBLIC_WEATHER_URL
  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        console.log(data)
      })
  }, [])
  console.log(weather)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
