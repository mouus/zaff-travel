import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <div>
            <Navbar />
            <div className='px-6 py-12 mx-auto'>
                {/* Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Meet the Cruise Republic Team
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        At Cruise Republic Maldives, our team is made up of passionate ocean enthusiasts, experienced divers, and hospitality professionals dedicated to delivering unforgettable marine adventures. With years of expertise in scuba diving, island hopping, and private boat excursions, we ensure that every journey is safe, exciting, and tailored to your needs.
                    </p>
                </header>

                {/* Expertise Section */}
                <section className="mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-center">Our Expertise</h2>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto text-center">
                        • <strong>Scuba Diving &amp; Shark Expeditions</strong> – Led by highly trained dive professionals, we offer world-class diving experiences, including encounters with Fuvahmulah&apos;s famous tiger sharks.
                        <br />
                        • <strong>Island-Hopping &amp; Private Charters</strong> – Our crew navigates the stunning waters of the Maldives, taking you to pristine sandbanks, remote islands, and vibrant snorkeling sites.
                        <br />
                        • <strong>Sunset Cruises &amp; Exclusive Experiences</strong> – Our hospitality team ensures a relaxing, enjoyable experience with cocktails, music, and breathtaking ocean views.
                    </p>
                </section>

                {/* Leadership & Crew Introduction */}
                <section className="mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-center">
                        Meet Our Leadership &amp; Crew
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto text-center mb-8">
                        • <strong>CEO Ahmed Ali</strong> – A seasoned hospitality professional with 20 years of experience, Ahmed Ali has worked his way up from receptionist to front office manager and airport manager at various five-star resorts. A pioneer in promoting Fuvahmulah tourism, he is known for his dedication, authenticity, and welcoming personality.
                    </p>
                </section>

                {/* Team Members */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/team-1.PNG"
                            alt="Lead Manager - Javier Ayensa"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                        <h3 className="text-2xl font-bold mt-4">
                            Lead Manager - Javier Ayensa
                        </h3>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/team-5.jpg"
                            alt="Assistant Captain - Alzum"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                        <h3 className="text-2xl font-bold mt-4">
                            Assistant Captain - Alzum
                        </h3>
                        <p className="mt-2 text-lg max-w-md">
                            A former Maldivian Defense Force marine, Alzum is a highly trained emergency first responder and rescue expert. With years of experience in hospitality, he ensures the safety and comfort of all our guests while delivering top-tier service.
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/team-4.jpg"
                            alt="Captain - Nishan"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                        <h3 className="text-2xl font-bold mt-4">
                            Captain - Nishan
                        </h3>
                        <p className="mt-2 text-lg max-w-md">
                            A highly skilled boat captain with nearly 11 years of experience, Nishan&apos;s deep knowledge of Maldivian waters ensures smooth and safe journeys for all our guests. As a certified rescue diver, he adds an extra layer of safety and expertise to every adventure.
                        </p>
                    </div>

                    {/* Team Member 4 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/team-3.jpg"
                            alt="Crew - Jumaan"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                        <h3 className="text-2xl font-bold mt-4">
                            Crew - Jumaan
                        </h3>
                        <p className="mt-2 text-lg max-w-md">
                            A young and energetic key player with a strong background in hospitality, food, and beverage service. Jumaan&apos;s dedication to excellence ensures that guests enjoy a seamless and comfortable experience.
                        </p>
                    </div>

                    {/* Team Member 5 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/team-2.jpg"
                            alt="Crew - Rafhan"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                        <h3 className="text-2xl font-bold mt-4">
                            Crew - Rafhan
                        </h3>
                        <p className="mt-2 text-lg max-w-md">
                            An experienced food and beverage professional with a background in five-star resorts, Rafhan brings refined hospitality skills to our team. His attention to detail and guest-focused service ensure a premium onboard experience.
                        </p>
                    </div>
                </section>

                {/* Closing Statement */}
                <section className="text-center">
                    <p className="text-lg max-w-2xl mx-auto">
                        Every member of the Cruise Republic team is committed to safety, sustainability, and providing authentic Maldivian experiences. Whether you&apos;re here for an exhilarating dive or a peaceful sunset cruise, we&apos;re here to make your journey unforgettable.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}
