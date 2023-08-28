import React from 'react'

export default function WeatherCard() {
  return (
    <div className='border-2 border-black rounded-md p-8 min-w-[20em]'>
      <div className=''>

        <div className='py-2 flex justify-between   '>
          <div>
            Ciudad
          </div>
          <div>
            {/* place2 */}
          </div>
        </div>
        <div className='py-2 pb-12 text-3xl '>
          <div>Temperatura</div>
          <div>Clima</div>
        </div>
        
        <div className='py-1'>
          Humedad
        </div>
        <div className='py-1'>
          Viento
        </div>

      </div>
    </div>
  )
}
