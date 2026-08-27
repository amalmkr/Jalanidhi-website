import { useState } from "react";
import logo from "../assets/icons/footer-logo.png";
import { IoAddSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaHandsHelping
} from "react-icons/fa";


// Footer Accordion Component
function FooterAccordion({ title, children }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-white/10 md:border-0">

            {/* Mobile Heading */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 md:hidden"
            >

                <h2 className="text-xl font-bold">
                    {title}
                </h2>

                <span className="text-2xl text-sky-400">
                    {open ? <FiMinus/> : <IoAddSharp/>}
                </span>

            </button>


            {/* Desktop Heading */}
            <h2 className="hidden md:block text-2xl font-bold mb-6">
                {title}
            </h2>


            {/* Content */}
            <div
                className={`
                    overflow-hidden transition-all duration-300
                    md:max-h-none md:opacity-100 md:block
                    ${open
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >

                <div className="pb-5 md:pb-0">
                    {children}
                </div>

            </div>

        </div>
    );
}


function Footer() {

    return (

        <footer className="relative overflow-hidden bg-[#06284F] text-white">


            {/* Top Wave */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-sky-600/20 to-cyan-500/20 blur-2xl">
            </div>


            <div className="max-w-7xl mx-auto px-6 py-16">


                {/* Main Footer Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">


                    {/* ================= LOGO SECTION ================= */}

                    <div>

                        <div className="flex items-center gap-3">

                            <img
                                src={logo}
                                alt="Jalanidhi logo"
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


                        <div className="w-16 h-1 bg-sky-400 mt-6 mb-6">
                        </div>


                        <p className="text-gray-300 leading-8">

                            Committed to provide clean,
                            safe and reliable drinking water
                            to every household.

                        </p>


                        <h3 className="mt-8 text-sky-400 italic text-xl">
                            💧 Save Water, Save Future
                        </h3>

                    </div>


                    {/* ================= QUICK LINKS ================= */}

                    <FooterAccordion title="Quick Links">

                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-sky-400 cursor-pointer transition"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="hover:text-sky-400 cursor-pointer transition"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <HashLink
                                smooth
                                to="/#services"
                                className="hover:text-sky-400 cursor-pointer transition"
                            >
                                Services
                            </HashLink>
                        </li>

                        <li>
                            <Link
                                to="/quick-pay"
                                className="hover:text-sky-400 cursor-pointer transition"
                            >
                                Bill Payment
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/new-connection"
                                className="hover:text-sky-400 cursor-pointer transition"
                            >
                                New Connection
                            </Link>
                        </li>

                        <li>
                            <HashLink
                                smooth
                                to="/#contact"
                                className="hover:text-sky-400 cursor-pointer transition"
                            >
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                    </FooterAccordion>


                    {/* ================= CONTACT ================= */}

                    <FooterAccordion title="Contact Us">

                        <div className="space-y-6 text-gray-300">


                            {/* Address */}
                            <div className="flex gap-4">

                                <FaMapMarkerAlt className="text-sky-400 mt-1 shrink-0" />

                                <p>
                                    Jalanidhi Water Authority
                                    <br />
                                    Iringattiri (PO), Malappuram
                                </p>

                            </div>


                            {/* Phone */}
                            <div className="flex gap-4">

                                <FaPhoneAlt className="text-sky-400 mt-1 shrink-0" />

                                <p>
                                    +91 99999 99999
                                </p>

                            </div>


                            {/* Email */}
                            <div className="flex gap-4">

                                <FaEnvelope className="text-sky-400 mt-1 shrink-0" />

                                <p>
                                    info@jalanidhi.in
                                </p>

                            </div>


                        </div>

                    </FooterAccordion>


                    {/* ================= HELP ================= */}

                    <FooterAccordion title="Help">

                        <div className="space-y-5 text-gray-300">


                            {/* Help 1 */}
                            <div className="flex gap-4">

                                <FaHandsHelping className="text-sky-400 mt-1 shrink-0" />

                                <div>

                                    <p className="text-sm">
                                        ബിൽ എങ്ങനെ അടയ്ക്കാം ?
                                    </p>

                                    <p className="text-sky-400 text-sm mt-1 cursor-pointer hover:text-white transition">
                                        കൂടുതൽ അറിയുക →
                                    </p>

                                </div>

                            </div>


                            {/* Help 2 */}
                            <div className="flex gap-4">

                                <FaHandsHelping className="text-sky-400 mt-1 shrink-0" />

                                <div>

                                    <p className="text-sm">
                                        പുതിയ കണക്ഷൻ എങ്ങനെ എടുക്കാം ?
                                    </p>

                                    <p className="text-sky-400 text-sm mt-1 cursor-pointer hover:text-white transition">
                                        കൂടുതൽ അറിയുക →
                                    </p>

                                </div>

                            </div>


                            {/* Help 3 */}
                            <div className="flex gap-4">

                                <FaHandsHelping className="text-sky-400 mt-1 shrink-0" />

                                <div>

                                    <p className="text-sm">
                                        കണക്ഷൻ നില എങ്ങനെ പരിശോധിക്കാം ?
                                    </p>

                                    <p className="text-sky-400 text-sm mt-1 cursor-pointer hover:text-white transition">
                                        കൂടുതൽ അറിയുക →
                                    </p>

                                </div>

                            </div>


                            {/* Help 4 */}
                            <div className="flex gap-4">

                                <FaHandsHelping className="text-sky-400 mt-1 shrink-0" />

                                <div>

                                    <p className="text-sm">
                                        എങ്ങനെ പരാതിപ്പെടാം ?
                                    </p>

                                    <p className="text-sky-400 text-sm mt-1 cursor-pointer hover:text-white transition">
                                        കൂടുതൽ അറിയുക →
                                    </p>

                                </div>

                            </div>


                        </div>

                    </FooterAccordion>


                </div>


                {/* ================= DIVIDER ================= */}

                <div className="border-t border-sky-500/30 my-10">
                </div>


                {/* ================= SOCIAL ================= */}

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">


                    <div>

                        <h2 className="text-xl font-semibold">
                            Follow Us
                        </h2>

                    </div>


                    <div className="flex gap-5 text-2xl">


                        {/* Facebook */}
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-sky-500 duration-300 flex items-center justify-center"
                        >
                            <FaFacebookF />
                        </a>


                        {/* Instagram */}
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-500 duration-300 flex items-center justify-center"
                        >
                            <FaInstagram />
                        </a>


                        {/* WhatsApp */}
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-green-500 duration-300 flex items-center justify-center"
                        >
                            <FaWhatsapp />
                        </a>


                        {/* YouTube */}
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 duration-300 flex items-center justify-center"
                        >
                            <FaYoutube />
                        </a>


                    </div>

                </div>


            </div>


            {/* ================= BOTTOM ================= */}

            <div className="border-t border-white/10">


                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">


                    <p className="text-center md:text-left">
                        © 2026 Jalanidhi Water Authority.
                        All Rights Reserved.
                    </p>


                    <div className="flex gap-6 mt-4 md:mt-0">

                        <a
                            href="#"
                            className="hover:text-sky-400 transition"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="hover:text-sky-400 transition"
                        >
                            Terms & Conditions
                        </a>

                    </div>


                </div>


            </div>


        </footer>
    );
}


export default Footer;