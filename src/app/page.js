import Image from 'next/image'
import WeatherCard from '@/components/weatherCard'
export default function Home() {

  return (
    <main className="">
      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <WeatherCard />
      </div>
    </main>
  )
}
