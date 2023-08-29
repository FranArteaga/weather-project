import React from 'react'

export default function WeatherCard(props) {
  const { city, temperature, weather, weatherDescription, humidity, wind, max, min } = props
  return (
    <div className='text-black bg-white bg-opacity-90  min-h-[21em] border-2 border-black rounded-lg px-8 py-10 sm:py-6 w-[20em]'>
      <div className='flex flex-col justify-between font-bold'>

        <div className='flex flex-col items-center pb-2 '>
          <div className='text-3xl'>
            {city}
          </div>

          <div className='py-6 sm:py-3 text-3xl  flex flex-col items-center'>
            <div className='font-medium sm:font-normal pb-5 sm:pb-3'>{temperature}</div>
            <div className='font-semibold sm:font-medium pb-2 sm:pb-0'>{weather}</div>
            <div className='font-semibold sm:font-medium '>{weatherDescription}</div>
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
