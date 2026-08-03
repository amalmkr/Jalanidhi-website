import logo from "../assets/footer-logo.png"

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaHandsHelping
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06284F] text-white">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-sky-600/20 to-cyan-500/20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-16 h-16"
              />

              <div>
                <h2 className="text-3xl font-bold">
                  JALANIDHI
                </h2>

                <p className="text-sky-400 text-xl font-semibold">
                  WATER AUTHORITY
                </p>
              </div>
            </div>

            <div className="w-16 h-1 bg-sky-400 mt-6 mb-6"></div>

            <p className="text-gray-300 leading-8">
              Committed to provide clean,
              safe and reliable drinking water
              to every household.
            </p>

            <h3 className="mt-8 text-sky-400 italic text-xl">
              💧 Save Water, Save Future
            </h3>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-sky-400 cursor-pointer">Home</li>
              <li className="hover:text-sky-400 cursor-pointer">About</li>
              <li className="hover:text-sky-400 cursor-pointer">Services</li>
              <li className="hover:text-sky-400 cursor-pointer">Bill Payment</li>
              <li className="hover:text-sky-400 cursor-pointer">New Connection</li>
              <li className="hover:text-sky-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Contact Us
            </h2>

            <div className="space-y-6 text-gray-300">

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-sky-400 mt-1" />
                <p>
                  Jalanidhi Water Authority<br />
                  Iringattiri (po) , Malappuram
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-sky-400 mt-1" />
                <p>+91 99999 99999</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-sky-400 mt-1" />
                <p>info@jalanidhi.in</p>
              </div>

            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-bold mb-6">
              HELP
            </h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex gap-4">
                <FaHandsHelping className="text-sky-400 mt-1" />
                <div>
                  <p className="text-sm">ബിൽ എങ്ങനെ അടയ്ക്കാം ?</p>
                  <p className="text-sky-400">
                    -link-
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaHandsHelping className="text-sky-400 mt-1" />
                <div>
                  <p className="text-sm">പുതിയ കണക്ഷൻ എങ്ങനെ എടുക്കാം ?</p>
                  <p className="text-sky-400">
                    -link-
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaHandsHelping className="text-sky-400 mt-1" />
                <div>
                  <p className="text-sm">കണക്ഷൻ നില എങ്ങനെ പരിശോധിക്കാം ?</p>
                  <p className="text-sky-400">
                    -link-
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaHandsHelping className="text-sky-400 mt-1" />
                <div>
                  <p>എങ്ങനെ പരാതിപ്പെടാം</p>
                  <p className="text-sky-400">
                    -link-
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-sky-500/30 my-10"></div>

        {/* Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-xl font-semibold">
              Follow Us
            </h2>
          </div>

          <div className="flex gap-5 text-2xl">

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-sky-500 duration-300 flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-500 duration-300 flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-green-500 duration-300 flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 duration-300 flex items-center justify-center"
            >
              <FaYoutube />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <p>
            © 2026 Jalanidhi Water Authority. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sky-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-sky-400">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;