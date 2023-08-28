import Image from 'next/image'
import WeatherCard from '@/components/weatherCard'
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=''>
        <WeatherCard
        city="tepic"
        temperature="34"
        weather="Cloudy"
        humidity="hhhhh"
        wind="wwwww"

        />
      </div>
    </main>
  )
}
