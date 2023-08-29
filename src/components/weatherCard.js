import React from 'react'

export default function WeatherCard(props) {
  const { city, temperature, weather, humidity, wind } = props
  return (
    <div className='border-2 border-black rounded-md p-8 w-[20em]'>
      <div className='flex flex-col justify-between'>

        <div className='py-2'>
          <div>
            {city}
          </div>
          <div className='py-2 pb-12 text-3xl '>
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
