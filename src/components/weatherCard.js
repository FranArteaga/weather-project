import React from 'react'

export default function WeatherCard(props) {
  const { city, temperature, weather, weatherDescription, humidity, wind, max, min } = props
  return (
    <div className='text-black bg-white bg-opacity-90 border-2 border-rose-100 w-[20em] rounded-3xl px-5 sm:px-7 py-7'>
      <div className='text-slate-900 flex flex-col justify-between'>

        <div className='flex flex-col items-center pb-2 '>
          <div className='font-bold text-3xl'>
            {city}
          </div>

          <div className='py-6 sm:py-3 text-3xl  flex flex-col items-center'>
            <div className='font-medium sm:font-normal text-4xl  pb-5 sm:pb-3'>{temperature}</div>
            <div className='font-semibold sm:font-medium pb-2 sm:pb-0'>{weather}</div>
            <div className='font-semibold sm:font-medium '>{weatherDescription}</div>
          </div>


        </div>
        <div className='sm:text-base text-xl font-medium'>
          <div className='flex justify-between pb-4 sm:pb-8'>
            <div>{max}</div>
            <div>{min}</div>
          </div>

          <div>
            <div className='py-1'>
              {humidity}
            </div>

            <div className=''>
              {wind}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
