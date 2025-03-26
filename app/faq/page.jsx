import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaShip,
  FaBed,
  FaTheaterMasks,
  FaChevronLeft,
  FaChevronRight,
  FaTint,
} from 'react-icons/fa'

function FAQPage() {
  const faqs = [
    {
      question: 'Do we offer transfers from the airport to the liveaboard?',
      answer:
        'Yes, we provide arranged transfers from the airport directly to the vessel through our dedicated transfer team.',
    },
    {
      question: 'What currency should I bring?',
      answer:
        'We accept USD, Euros, Visa, and MasterCard only. Please note that credit card payments are charged in USD and subject to a 4% surcharge. We also recommend informing your credit card provider about your travel to the Maldives, as some companies may block international transactions for security reasons.',
    },
    {
      question: 'What are the number of guides available on board?',
      answer:
        'We have a team of 3 experienced dive guides who are familiar with the local dive sites and marine life. Our guides are also trained in first aid and emergency response.',
    },
    {
      question: 'Does Cruise Republic Maldives look into my medical conditions?',
      answer:
        'Yes, if you have a medical condition and/or will be taking any medication while on holiday, we will need a medical statement from your doctor. This is to ensure that you are fit to dive and that our team is aware of any potential risks.',
    },
    {
      question: 'Mode of Diving',
      answer:
        'All dives are conducted directly from the main liveaboard vessel, which is fully equipped with tanks, weight belts, and weights. Briefings are conducted in the stern area before each dive to ensure all guests are informed about the site, safety protocols, and dive plans.',
    },
    {
      question: 'Daily Dive Schedule',
      answer: `Our daily dive schedule includes up to three dives per day, including optional night dives depending on conditions.

- **First Dive:** Between 6:00 AM – 7:00 AM (Light snack before, breakfast buffet after)
- **Second Dive:** Between 11:00 AM – 12:00 PM (Followed by lunch)
- **Third Dive:** Between 3:00 PM – 4:00 PM (Followed by optional activities)

Post-dive activities include sandbank visits, walks on local islands, or marine biology talks with our dive guides and experts. The exact program varies depending on the day’s schedule and weather.`,
    },
    {
      question: 'How long should I wait before flying after diving?',
      answer:
        'Most diving organizations recommend waiting at least 18 hours after your last dive before flying. This allows your body adequate time to safely eliminate excess nitrogen absorbed during diving.',
    },
    {
      question: 'What is your policy on solo, buddy, or group diving?',
      answer:
        'Solo diving is not permitted. All dives are guided by experienced professionals familiar with the local dive sites and current conditions. We maintain small group sizes with 2–3 dive guides onboard. Our team is flexible and aims to meet the expectations of all divers while encouraging respectful behavior towards marine life and fellow guests.',
    },
  ]

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-8 mt-5 text-center">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl ">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
            </div>
          ))}

          <div className="p-6 bg-white rounded-2xl ">
            <h2 className="text-xl font-semibold mb-4">General Travel Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Passport Validity:</strong> Your passport must be valid for at least six months beyond your arrival date.
              </li>
              <li>
                <strong>Visa:</strong> All visitors are granted a 30-day visa on arrival.
              </li>
              <li>
                <strong>Time Zone:</strong> Maldives operates 5 hours ahead of GMT (GMT+5).
              </li>
              <li>
                <strong>IMUGA Registration:</strong> Travelers must complete the IMUGA immigration form prior to their flight at:{' '}
                <a
                  href="https://travel.immigration.gov.mv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://travel.immigration.gov.mv
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9607780739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <FaWhatsapp size={24} />
      </a>

      <Footer />
    </div>
  )
}

export default FAQPage
