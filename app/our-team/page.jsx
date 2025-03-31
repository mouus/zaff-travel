import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export default function Page() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-7xl px-6 py-16 mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Meet the Cruise Republic Team</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At Cruise Republic Maldives, our team is made up of passionate ocean enthusiasts, experienced divers, and
            hospitality professionals dedicated to delivering unforgettable marine adventures. With years of expertise
            in scuba diving, island hopping, and private boat excursions, we ensure that every journey is safe,
            exciting, and tailored to your needs.
          </p>
        </header>

        {/* Expertise Section */}
        <section className="mb-20 py-12 border-t border-b border-gray-200">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Expertise</h2>
          <div className="text-lg leading-relaxed max-w-4xl mx-auto">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="font-bold whitespace-nowrap md:w-1/3 text-center md:text-right">
                  Scuba Diving & Shark Expeditions
                </div>
                <div className="md:w-2/3">
                  Led by highly trained dive professionals, we offer world-class diving experiences, including
                  encounters with Fuvahmulah's famous tiger sharks.
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="font-bold whitespace-nowrap md:w-1/3 text-center md:text-right">
                  Island-Hopping & Private Charters
                </div>
                <div className="md:w-2/3">
                  Our crew navigates the stunning waters of the Maldives, taking you to pristine sandbanks, remote
                  islands, and vibrant snorkeling sites.
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="font-bold whitespace-nowrap md:w-1/3 text-center md:text-right">
                  Sunset Cruises & Exclusive Experiences
                </div>
                <div className="md:w-2/3">
                  Our hospitality team ensures a relaxing, enjoyable experience with cocktails, music, and breathtaking
                  ocean views.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Crew Introduction */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Leadership & Crew</h2>

          {/* Founder Card */}
          <div className="mb-16 border border-black p-10 relative">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group overflow-hidden w-[250px] h-[250px]">
                  <Image
                    src="/founder-1.jpg"
                    alt="Abdulla Zafar Ali - Pioneer of Tiger Shark Diving in Fuvahmulah"
                    width={250}
                    height={250}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black pointer-events-none"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold mb-2">Abdulla Zafar Ali</h3>
                <p className="text-xl font-semibold mb-6">Pioneer of Tiger Shark Diving in Fuvahmulah | Founder & COO | Manager</p>
                <div className="text-lg space-y-4">
                  <p>
                    Abdulla Zafar Ali is a PADI-certified scuba instructor, surfer, and hospitality professional with
                    over 25 years of experience in the tourism industry. Since 1999, he has worked in various roles—from
                    receptionist to butler—before fully dedicating himself to scuba diving.
                  </p>
                  <p>
                    In 2011, Zafar had his first scuba diving experience in Fuvahmulah, a time when the island had no
                    dive centers or schools and very limited scuba equipment. His passion for diving and vision for the
                    island's tourism led him to make a groundbreaking discovery: tiger sharks near the harbor.
                  </p>
                  <p>
                    This discovery transformed Fuvahmulah into the world's No. 1 tiger shark diving destination. Since
                    2015, Zafar has promoted Fuvahmulah internationally, establishing it as a premier destination.
                  </p>
                  <p>
                    As the Founder & COO of Cruise Republic, he continues to expand ocean tourism in Fuvahmulah while
                    remaining committed to protecting the natural ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group overflow-hidden w-[250px] h-[250px]">
                  <Image
                    src="/founder-2.PNG"
                    alt="CEO Ahmed Ali"
                    width={250}
                    height={250}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black pointer-events-none"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold mb-2">Ahmed Ali</h3>
                <p className="text-xl font-semibold mb-6">Chief Executive Officer</p>
                <p className="text-lg">
                  A seasoned hospitality professional with 20 years of experience, Ahmed Ali has worked his way up from
                  receptionist to front office manager and airport manager at various five-star resorts. A pioneer in
                  promoting Fuvahmulah tourism, he is known for his dedication, authenticity, and welcoming personality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">


            {/* Team Member 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group overflow-hidden w-[180px] h-[180px]">
                  <Image
                    src="/team-5.jpg"
                    alt="Assistant Captain - Alzum"
                    width={180}
                    height={180}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black pointer-events-none"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Alzum</h3>
                <p className="text-lg font-medium mb-3">Assistant Captain</p>
                <p className="text-base">
                  A former Maldivian Defense Force marine, Alzum is a highly trained emergency first responder and
                  rescue expert. With years of experience in hospitality, he ensures the safety and comfort of all our
                  guests while delivering top-tier service.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group overflow-hidden w-[180px] h-[180px]">
                  <Image
                    src="/team-4.jpg"
                    alt="Captain - Nishan"
                    width={180}
                    height={180}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black pointer-events-none"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Nishan</h3>
                <p className="text-lg font-medium mb-3">Captain</p>
                <p className="text-base">
                  A highly skilled boat captain with nearly 11 years of experience, Nishan's deep knowledge of Maldivian
                  waters ensures smooth and safe journeys for all our guests. As a certified rescue diver, he adds an
                  extra layer of safety and expertise to every adventure.
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group overflow-hidden w-[180px] h-[180px]">
                  <Image
                    src="/team-2.jpg"
                    alt="Crew - Rafhan"
                    width={180}
                    height={180}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black pointer-events-none"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Rafhan</h3>
                <p className="text-lg font-medium mb-3">Crew Member</p>
                <p className="text-base">
                  An experienced food and beverage professional with a background in five-star resorts, Rafhan brings
                  refined hospitality skills to our team. His attention to detail and guest-focused service ensure a
                  premium onboard experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center py-12 border-t border-gray-200">
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Every member of the Cruise Republic team is committed to safety, sustainability, and providing authentic
            Maldivian experiences. Whether you're here for an exhilarating dive or a peaceful sunset cruise, we're here
            to make your journey unforgettable.
          </p>
        </section>
      </main>

           {/* WhatsApp Button */}
           <a
        href="https://wa.me/9607780739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-50"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      <Footer />
    </div>
  )
}

