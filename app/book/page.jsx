"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaCalendarAlt, FaUserFriends, FaEnvelope, FaPhone, FaCommentDots, FaCheck } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/utils/supabase"

export default function BookingPage() {
  // States for form fields
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [specialRequest, setSpecialRequest] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("standard")
  const [guests, setGuests] = useState(2)
  const [preferredDate, setPreferredDate] = useState("")

  // State for form steps
  const [currentStep, setCurrentStep] = useState(1)

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Package options
  const packages = [
    {
      id: "standard",
      name: "Standard Dive Package",
      description: "Perfect for recreational divers exploring the vibrant reefs of the Maldives",
      features: [
        "2 dives per day",
        "Standard equipment rental",
        "Professional dive guide",
        "Underwater photography (shared)",
      ],
      image: "/standard-package.jpg",
    },
    {
      id: "premium",
      name: "Premium Dive Package",
      description: "Enhanced experience with additional dives and premium equipment",
      features: [
        "3 dives per day",
        "Premium equipment rental",
        "Professional dive guide",
        "Underwater photography (personal)",
        "Dive insurance included",
      ],
      image: "/premium-package.jpg",
    },
    {
      id: "tiger",
      name: "Tiger Shark Expedition",
      description: "Specialized expedition to encounter the majestic tiger sharks of Fuvahmulah",
      features: [
        "2 tiger shark dives per day",
        "Complete equipment rental",
        "Specialized shark dive guide",
        "Marine biology briefings",
        "Shark conservation contribution",
      ],
      image: "/tiger-package.jpg",
    },
  ]

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Insert the data into the 'info' table in Supabase
      const { data, error } = await supabase.from("info").insert({
        name,
        phone,
        email,
        special_req: specialRequest,
        package: selectedPackage,
        guests: guests,
        preferred_date: preferredDate,
        status: "Pending",
      })

      if (error) {
        console.error("Error inserting booking:", error)
        setErrorMessage("There was an error submitting your booking. Please try again.")
        setIsSubmitting(false)
      } else {
        console.log("Booking submitted:", data)
        setIsSubmitting(false)
        setIsSuccess(true)
        // Clear form fields after successful submission
        setName("")
        setPhone("")
        setEmail("")
        setSpecialRequest("")
        setSelectedPackage("standard")
        setGuests(2)
        setPreferredDate("")
      }
    } catch (error) {
      console.error("Exception during booking submission:", error)
      setErrorMessage("An unexpected error occurred. Please try again later.")
      setIsSubmitting(false)
    }
  }

  // Handle next step
  const handleNextStep = (e) => {
    e.preventDefault()
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  // Handle previous step
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  // Reset form after successful submission
  const handleStartOver = () => {
    setIsSuccess(false)
    setCurrentStep(1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 px-6  bg-black text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Maldives Adventure</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Experience the underwater wonders of the Maldives with our expertly guided diving expeditions and cruises.
            </p>
          </div>
        </section>

        {/* Booking Process Steps */}
        {!isSuccess && (
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex justify-between mb-12 relative">
              {/* Progress Bar */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= 1 ? "bg-black text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  1
                </div>
                <span className={`mt-2 text-sm ${currentStep >= 1 ? "text-black font-medium" : "text-gray-500"}`}>
                  Select Package
                </span>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  2
                </div>
                <span className={`mt-2 text-sm ${currentStep >= 2 ? "text-black font-medium" : "text-gray-500"}`}>
                  Your Details
                </span>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= 3 ? "bg-black text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3
                </div>
                <span className={`mt-2 text-sm ${currentStep >= 3 ? "text-black font-medium" : "text-gray-500"}`}>
                  Confirm Booking
                </span>
              </div>
            </div>

            {/* Step 1: Select Package */}
            {currentStep === 1 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Diving Package</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`border p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedPackage === pkg.id ? "border-black ring-2 ring-black" : "border-gray-200"
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      {/* <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                        <Image
                          src={pkg.image || "/placeholder.svg?height=300&width=400"}
                          alt={pkg.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-105"
                        />
                      </div> */}

                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>

                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <button
                          className={`w-full py-2 transition-colors ${
                            selectedPackage === pkg.id
                              ? "bg-black text-white"
                              : "bg-gray-100 text-black hover:bg-gray-200"
                          }`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Continue to Details
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Your Details */}
            {currentStep === 2 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Your Details</h2>

                <div className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Name */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="name" className="block font-medium mb-2">
                        <FaUserFriends className="inline-block mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="email" className="block font-medium mb-2">
                        <FaEnvelope className="inline-block mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="phone" className="block font-medium mb-2">
                        <FaPhone className="inline-block mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    {/* Number of Guests */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="guests" className="block font-medium mb-2">
                        <FaUserFriends className="inline-block mr-2" />
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        value={guests}
                        onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="col-span-2">
                      <label htmlFor="preferredDate" className="block font-medium mb-2">
                        <FaCalendarAlt className="inline-block mr-2" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    {/* Special Requirements */}
                    <div className="col-span-2">
                      <label htmlFor="specialRequest" className="block font-medium mb-2">
                        <FaCommentDots className="inline-block mr-2" />
                        Special Requirements
                      </label>
                      <textarea
                        id="specialRequest"
                        name="specialRequest"
                        rows="4"
                        placeholder="Let us know if you have any special requests or requirements"
                        className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="bg-gray-200 text-black px-6 py-2 hover:bg-gray-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                    >
                      Review Booking
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirm Booking */}
            {currentStep === 3 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Review & Confirm Your Booking</h2>

                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">Booking Summary</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium">Package:</span>
                        <span>{packages.find((pkg) => pkg.id === selectedPackage)?.name}</span>
                      </div>

                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium">Name:</span>
                        <span>{name}</span>
                      </div>

                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium">Email:</span>
                        <span>{email}</span>
                      </div>

                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium">Phone:</span>
                        <span>{phone}</span>
                      </div>

                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium">Guests:</span>
                        <span>{guests}</span>
                      </div>

                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium">Preferred Date:</span>
                        <span>{preferredDate}</span>
                      </div>

                      {specialRequest && (
                        <div className="pt-2">
                          <span className="font-medium">Special Requirements:</span>
                          <p className="mt-1 text-gray-600">{specialRequest}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-6">{errorMessage}</div>
                  )}

                  <div className="flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="bg-gray-200 text-black px-6 py-2 hover:bg-gray-300 transition-colors"
                      disabled={isSubmitting}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Success Message */}
        {isSuccess && (
          <div className="max-w-2xl mx-auto px-6 py-16 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-green-500" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Booking Submitted Successfully!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for booking with Cruise Republic. We have received your booking request and will contact you
              shortly to confirm the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleStartOver}
                className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
              >
                Book Another Trip
              </button>
              <Link href="/" className="bg-gray-200 text-black px-8 py-3 hover:bg-gray-300 transition-colors">
                Return to Home
              </Link>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Booking Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Payment Policy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>50% deposit required to confirm booking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Full payment due 30 days before trip date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Payment methods: Bank transfer, credit card, or PayPal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Cancellation Policy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>60+ days: Full refund minus processing fee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>30-59 days: 50% refund</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Less than 30 days: No refund</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">What to Bring</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Dive certification card (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Swimwear and light clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Sunscreen, hat, and sunglasses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-16 px-6 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Need Assistance?</h2>
            <p className="text-lg mb-8">
              Our team is here to help you plan your perfect diving adventure. Contact us directly for personalized
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+9607780739"
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 transition-colors flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                +960 778 0739
              </a>
              <a
                href="https://wa.me/9607780739"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>
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

  