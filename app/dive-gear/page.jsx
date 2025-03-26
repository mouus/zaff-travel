import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import {
  FaSwimmer,
  FaGlasses,
  FaLungs,
  FaTshirt,
  FaLifeRing,
  FaCompressArrowsAlt,
  FaLightbulb,
  FaClock,
  FaArrowCircleUp,
  FaGasPump,
  FaBoxOpen,
  FaWhatsapp,

} from 'react-icons/fa'

const rentals = [
  { name: 'Mask', price: '$7', loss: '$95', icon: <FaGlasses size={32} /> },
  { name: 'Snorkel', price: '$7', loss: '$70', icon: <FaSwimmer size={32} /> },
  { name: 'Fins', price: '$7', loss: '$150', icon: <FaSwimmer size={32} /> },
  { name: 'Wetsuit', price: '$10', loss: '$200', icon: <FaTshirt size={32} /> },
  { name: 'BCD', price: '$12', loss: '$450', icon: <FaLifeRing size={32} /> },
  { name: 'Regulator', price: '$12', loss: '$450', icon: <FaLungs size={32} /> },
  { name: 'Torch', price: '$8', loss: '$300', icon: <FaLightbulb size={32} /> },
  { name: 'Dive Computer', price: '$12', loss: '$400', icon: <FaClock size={32} /> },
  { name: 'SMB', price: 'Free', loss: '$70', icon: <FaArrowCircleUp size={32} /> },
  { name: '15L Tank', price: '$13', loss: '$400', icon: <FaGasPump size={32} /> },
  { name: '11L Tank', price: '$8', loss: '$400', icon: <FaGasPump size={32} /> },
]

function RentalPage() {
  return (
    <div className="">
        <Navbar />  
    <div className='container mx-auto px-4 py-12'>
    <h1 className="text-4xl font-bold mb-8 text-center">Equipment Rentals</h1>
      <p className="text-lg text-center mb-10 text-gray-600">
        We provide high-quality diving equipment for rent during your stay.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rentals.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4 text-black">{item.icon}</div>
            <h2 className="text-xl text-black font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700">Rental: <strong>{item.price}</strong></p>
            <p className="text-gray-700">Loss/Damage: <strong>{item.loss}</strong></p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <FaBoxOpen className="text-4xl mx-auto mb-2 text-black" />
        <p className="text-lg font-semibold">
          Full Equipment Rental Available: <span className="text-black">$4 per day</span>
        </p>
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

export default RentalPage
