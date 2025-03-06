import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; Cruise Republic All rights reserved.</p>
        <div className="mt-4">
          <p className="text-sm">
            Everfront PVT Ltd<br />
            Zindha, Funaad, Husnuheenamagu<br />
            Fuvahmulah City
          </p>
        </div>
        <div className="flex justify-center mt-2 gap-4 flex-wrap">
          <a
            href="https://www.facebook.com/share/19xrPbFbDc/?mibextid=wwXIfr"
            className="hover:underline flex items-center gap-2"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.instagram.com/cruiserepublicmv?igsh=YnI1YzZjazR1N3Jr&utm_source=qr"
            className="hover:underline flex items-center gap-2"
          >
            <FaInstagram /> Instagram
          </a>
          <p
            className=" flex items-center gap-2"
          >
            <BsFillTelephoneFill /> Hotline: +9607795512
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
