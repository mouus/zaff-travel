import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { FaWhatsapp } from "react-icons/fa"

const rentals = [
  { name: "Mask", price: "$7", loss: "$95" },
  { name: "Snorkel", price: "$7", loss: "$70" },
  { name: "Fins", price: "$7", loss: "$150" },
  { name: "Wetsuit", price: "$10", loss: "$200" },
  { name: "BCD", price: "$12", loss: "$450" },
  { name: "Regulator", price: "$12", loss: "$450" },
  { name: "Torch", price: "$8", loss: "$300" },
  { name: "Dive Computer", price: "$12", loss: "$400" },
  { name: "SMB", price: "Free", loss: "$70" },
  { name: "15L Tank", price: "$13", loss: "$400" },
  { name: "11L Tank", price: "$8", loss: "$400" },
]

function RentalPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 tracking-tight">Equipment Rentals</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We provide high-quality diving equipment for rent during your stay. All equipment is regularly maintained
            and sanitized for your safety and comfort.
          </p>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {rentals.map((item, idx) => (
              <div
                key={idx}
                className="border border-black p-6 flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <h2 className="text-xl font-bold mb-4">{item.name}</h2>
                <div className="w-full border-t border-gray-200 my-2"></div>
                <div className="flex justify-between w-full mt-2">
                  <p className="text-left">Rental:</p>
                  <p className="font-semibold">{item.price}</p>
                </div>
                <div className="flex justify-between w-full mt-2">
                  <p className="text-left">Loss/Damage:</p>
                  <p className="font-semibold">{item.loss}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-b border-gray-200 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Full Equipment Package</h2>
            <p className="text-lg mb-6">Get everything you need with our complete diving equipment package.</p>
            <div className="inline-block border border-black px-8 py-4">
              <p className="text-xl font-bold">$4 per day</p>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Includes mask, snorkel, fins, wetsuit, BCD, regulator, and tank.
            </p>
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Rental Information</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-black p-6">
              <h3 className="text-xl font-bold mb-4">Booking Process</h3>
              <ul className="text-left space-y-2">
                <li>• Equipment should be reserved at least 24 hours in advance</li>
                <li>• Valid ID and credit card required for all rentals</li>
                <li>• Equipment is subject to availability</li>
              </ul>
            </div>
            <div className="border border-black p-6">
              <h3 className="text-xl font-bold mb-4">Return Policy</h3>
              <ul className="text-left space-y-2">
                <li>• All equipment must be returned clean and dry</li>
                <li>• Late returns incur additional daily charges</li>
                <li>• Damaged equipment will be charged at listed rates</li>
              </ul>
            </div>
          </div>
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

export default RentalPage

