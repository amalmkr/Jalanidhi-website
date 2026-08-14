import logo from "../assets/icons/main-logo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavSec(){
    const [menuOpen,setMenuOpen]=useState(false)
    return(
        <>
        <nav className="top-0 left-0 fixed bg-white/10 w-full border-b border-white/20 z-50 h-15 md:h-20">
            <div className="flex items-center justify-between px-4 md:px-10 h-full">
                <img src={logo} alt="logo" className="w-14 h-10 md:w-24 md:h-16"/>
                <div className="text-[#062748] font-noto flex gap-8 lg:gap-10 mt-5 font-extrabold hidden md:flex">
                    <NavLink to="/" end className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]"}>Home</NavLink>
                    <NavLink to="/about" className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>About</NavLink>
                    <HashLink smooth to="/#services" className="hover:text-[#80b7ee]">Services</HashLink>
                    <NavLink to="/quick-pay" className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Pay Bill</NavLink>
                    <NavLink to="/announcement" className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Announcements</NavLink>
                    <NavLink to="/help" className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Help</NavLink>
                    <HashLink smooth to="/#contacts" className="hover:text-[#80b7ee]">Contacts</HashLink>
                    <NavLink to="/complaint" className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Complaint</NavLink>
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
                        <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Home</NavLink>
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>About</NavLink>
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <HashLink smooth to="/#services" onClick={() => setMenuOpen(false)} className="hover:text-[#80b7ee]">Services</HashLink>
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <NavLink to="/quick-pay" onClick={() => setMenuOpen(false)} className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Pay Bill</NavLink>
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <NavLink to="/announcement" onClick={() => setMenuOpen(false)} className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Announcements</NavLink>
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <NavLink to="/help" onClick={() => setMenuOpen(false)} className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Help</NavLink>
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <HashLink smooth to="/#contacts" onClick={() => setMenuOpen(false)} className="hover:text-[#80b7ee]">Contacts</HashLink>
                        </li>
                        <li className="px-6 py-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <NavLink to="/complaint" onClick={() => setMenuOpen(false)} className={({isActive})=>isActive ? "text-[#80b7ee]": "hover:text-[#80b7ee]" }>Complaint</NavLink>
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