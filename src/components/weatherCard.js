import React from 'react'

export default function WeatherCard(props) {
  const { city, temperature, weather, humidity, wind, max, min } = props
  return (
    <div className='text-black bg-white bg-opacity-20  min-h-[18em] border-2 border-black rounded-lg p-8 w-[20em]'>
      <div className='flex flex-col justify-between font-bold'>

        <div className='py-2'>
          <div>
            {city}
          </div>
          <div className='py-2 pb-12 text-3xl'>
            <div>{temperature}</div>
            <div>{weather}</div>
          </div>
        </div>
        <div>
          <div className='py-1'>
            {humidity}
          </div>
          <div className='py-1'>
            {wind}
          </div>
        </div>

      </div>
    </div>
  )
}
