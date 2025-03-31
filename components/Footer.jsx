import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white mr-3">
                <Image src="/logo.jpg" alt="Cruise Republic" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold">Cruise Republic</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Experience the beauty of the Maldives with our luxury cruise services. Explore the deep south and discover
              paradise on our elegant vessel.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/19xrPbFbDc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/cruiserepublicmv?igsh=YnI1YzZjazR1N3Jr&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://wa.me/9607795512"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dive-itineraries"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                  Dive Itineraries
                </Link>
              </li>
              <li>
                <Link href="/our-cruise" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                  Our Cruise
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/dive-gear" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                  Dive Gear
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-white mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Everfront PVT Ltd
                  <br />
                  Zindha, Funaad, Husnuheenamagu
                  <br />
                  Fuvahmulah City
                </span>
              </li>
              <li className="flex items-center">
                <BsFillTelephoneFill className="text-white mr-3 flex-shrink-0" />
                <span className="text-gray-300">Hotline: +9607795512</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-white mr-3 flex-shrink-0" />
                <a href="mailto:info@cruiserepublic.mv" className="text-gray-300 hover:text-white transition-colors">
                  sales@cruiserepublicmaldives.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/book"
                className="inline-block bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cruise Republic. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

