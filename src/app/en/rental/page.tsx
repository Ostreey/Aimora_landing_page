import { EventContactForm } from '@/components/EventContactForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aimora Rental | Mobile Shooting Range Attraction for Events',
  description: 'Looking for a standout attraction for a corporate event, festival or picnic? Rent the Aimora interactive shooting range and give your guests an unforgettable experience.',
  keywords: [
    'event attraction rental',
    'mobile shooting range rental',
    'interactive shooting game',
    'corporate event attraction',
    'festival attraction',
    'team building activity',
    'aimora rental',
  ],
  openGraph: {
    title: 'Aimora Rental | Mobile Shooting Range Attraction for Events',
    description: 'Looking for a standout attraction for a corporate event, festival or picnic? Rent the Aimora interactive shooting range and give your guests an unforgettable experience.',
    type: 'website',
    images: ['/images/what_is_it_mobile.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aimora Rental | Mobile Shooting Range Attraction for Events',
    description: 'Looking for a standout attraction for a corporate event, festival or picnic? Rent the Aimora interactive shooting range and give your guests an unforgettable experience.',
    images: ['/images/what_is_it_mobile.png'],
  },
  alternates: {
    languages: {
      pl: '/wypozyczenie',
      en: '/en/rental',
    },
  },
}

export default function RentalPageEn() {
  return (
    <main className="min-h-screen">
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Aimora Interactive Shooting Range at Your Event
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
            Surprise your guests with a modern and safe shooting attraction. Our system guarantees great fun and engaging competition for everyone — regardless of age or experience.
          </p>
          <div className="text-center">
            <a href="#cta" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Perfect for corporate events, festivals and picnics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
              <img src="/icons/festival.svg" alt="Festivals and picnics" className="h-12 w-12 mx-auto mb-4 invert" />
              <h3 className="text-xl font-bold mb-2 text-white">Festivals & Picnics</h3>
              <p className="text-gray-400">Add excitement to local celebrations and attract crowds.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
              <img src="/icons/corporate.svg" alt="Corporate events" className="h-12 w-12 mx-auto mb-4 invert" />
              <h3 className="text-xl font-bold mb-2 text-white">Corporate Events</h3>
              <p className="text-gray-400">Bring your team together with an engaging, competitive activity.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
              <img src="/icons/bachelor.svg" alt="Bachelor parties" className="h-12 w-12 mx-auto mb-4 invert" />
              <h3 className="text-xl font-bold mb-2 text-white">Bachelor Parties</h3>
              <p className="text-gray-400">Deliver unforgettable excitement and a dose of adrenaline.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00B2E3] transition-all duration-300 transform hover:-translate-y-2">
              <img src="/icons/competition.svg" alt="Shooting competitions" className="h-12 w-12 mx-auto mb-4 invert" />
              <h3 className="text-xl font-bold mb-2 text-white">Shooting Competitions</h3>
              <p className="text-gray-400">Introduce dynamic, modern scenarios and automated scoring.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Full-service event setup</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Top-tier equipment</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Aimora interactive shooting targets</li>
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Professional airsoft replicas (pistols and rifles)</li>
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Full kit (BBs, gas, protective eyewear)</li>
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Shooting lane with a safety net</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Complete support</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Experienced instructor and technical staff</li>
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Transport, setup and teardown across Poland</li>
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Safety briefing for all participants</li>
                <li className="flex items-start"><span className="text-[#00B2E3] mr-3 mt-1">&#10003;</span>Organization of engaging mini-competitions and games</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Rental requirements and technical details</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Space</h3>
              <p className="text-gray-300">At least <span className="font-bold">5×5 meters</span> of flat area. We can operate both indoors and outdoors.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Power</h3>
              <p className="text-gray-300">The system is fully wireless. <span className="font-bold">No external power</span> is required.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-[#00B2E3]">Throughput</h3>
              <p className="text-gray-300">One setup serves up to <span className="font-bold">30 people per hour</span> with smooth rotation and no long queues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready for a sharpshooting thrill?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact us to discuss details and reserve a date for your event. We will prepare an offer tailored to your needs.
          </p>
          <a href="#cta" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
            Reserve a date
          </a>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Frequently asked questions (FAQ)</h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion locale="en" />
          </div>
        </div>
      </section>

      <div id="cta">
        <EventContactForm locale="en" />
      </div>
      <Footer locale="en" />
    </main>
  )
}

