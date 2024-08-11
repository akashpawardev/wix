import React, { useState } from 'react'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="bg-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" />
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
                <ul className={`${isOpen ? 'block' : 'hidden'} lg:flex space-y-2 lg:space-y-0 lg:space-x-4 bg-white text-center absolute lg:static lg:bg-transparent w-full lg:w-auto top-24 left-0 lg:top-0 lg:left-auto`}>
                    <li><a href="#home" className="block lg:inline-block py-2 px-4 font-semibold text-orange-400">Home</a></li>
                    <li><a href="#treatments" className="block lg:inline-block py-2 px-4 font-semibold">Treatments</a></li>
                    <li><a href="#home" className="block lg:inline-block py-2 px-4 font-semibold">Skin & FAQ</a></li>
                    <li><a href="#home" className="block lg:inline-block py-2 px-4 font-semibold">Medical Clinic</a></li>
                    <li><a href="#treatments" className="block lg:inline-block py-2 px-4 font-semibold">Photo Gallery</a></li>
                    <li><a href="#about" className="block lg:inline-block py-2 px-4 font-semibold">About Us</a></li>
                    <li><a href="#contact" className="block lg:inline-block py-2 px-4 font-semibold">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
