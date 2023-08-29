import React from 'react'

export default function WeatherCard(props) {
  const { city, temperature, weather, humidity, wind, max, min } = props
  return (
    <div className='text-black bg-white bg-opacity-70  min-h-[21em] border-2 border-black rounded-lg px-8 py-6 w-[20em]'>
      <div className='flex flex-col justify-between font-bold'>

        <div className='flex flex-col items-center py-2 '>
          <div className='text-3xl'>
            {city}
          </div>

          <div className='py-2 text-3xl font-normal'>
            <div>{temperature}</div>
            <div className='font-medium'>{weather}</div>
          </div>


        </div>
          <div className='flex text-lg justify-around pb-8'>
            <div>{max}</div>
            <div>{min}</div>
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
