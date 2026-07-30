import logo from "../assets/main-logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function NavSec(){
    const [menuOpen,setMenuOpen]=useState(false)
    return(
        <>
        <nav className="top-0 left-0 fixed bg-white/10 w-full  border-b border-white/20 z-50 h-15 md:h-20">
            <div className="flex items-center justify-between px-4 md:px-10 h-full">
                <img src={logo} alt="logo" className="w-14 h-10 md:w-24 md:h-16"/>
                <div className="text-[#062748]  font-noto flex gap-10 mt-5 font-extrabold hidden md:flex">
                    <span className="hover:text-[#80b7ee] hover:cursor-pointer">HOME</span>
                    <span className="hover:text-[#80b7ee] hover:cursor-pointer">ABOUT</span>
                    <span className="hover:text-[#80b7ee] hover:cursor-pointer">NEW CONNECTION</span>
                    <span className="hover:text-[#80b7ee] hover:cursor-pointer">ANNOUNCEMNT</span>
                    <span className="hover:text-[#80b7ee] hover:cursor-pointer">GALLERY</span>
                    <span className="hover:text-[#80b7ee] hover:cursor-pointer">CONTACT</span>
                    <span className="hover:text-[#80b7ee] hover:cursor-pointer">COMPLAINT</span>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <FaTimes className="text-3xl" />
                        ) : (
                            <FaBars className="text-3xl" />
                        )}
                    </button>
                </div>
            </div>
                {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full">
                    <div className="mx-3 mt-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
                    <ul className="flex flex-col py-4 text-[#062748] font-bold">
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        HOME
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        ABOUT
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        NEW CONNECTION
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        ANNOUNCEMENT
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        GALLERY
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        CONTACT
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        COMPLAINT
                        </li>
                    </ul>
                    </div>
                </div>
                )}
        </nav>
        </>
    )
}

export default NavSec;