import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

export default function Header() {
    return (
        <>
            <header className="bg-white p-2 shadow-md flex justify-center w-full">
                <div className=" w-4/5 text-sm flex flex-row items-center justify-between">
                    <div className="flex gap-10">
                        <span className="flex flex-row items-center"><MdLocationOn className="text-orange-400" /> 115 B Mittal Court, Nariman Point, Mumbai – 21</span>
                        <span className="flex flex-row items-center"><FaPhone className="text-orange-400" /> +91 22 22843000/22825555</span>
                    </div>
                    <div className="flex flex-row gap-2 text-orange-400">
                        <FaFacebookF />
                        <FaGooglePlusG />
                        <FaTwitter />   
                        <FaYoutube />
                        <ImInstagram />
                    </div>
                </div>
            </header>
            <div>
                <div className="container mx-auto flex justify-between items-center w-4/5 py-3">
                    <div className="text-xl font-bold"><img src="/logo.png" alt="" /></div>
                    <div className="flex flex-row items-center text-lg"><FaPhone className="text-orange-400 mr-1"/> +91 99200 33331 / 022 43154000</div>
                </div>
                <nav className=" bg-orange-400 flex justify-center p-3">
                    <ul className="flex gap-16 w-4/5 font-semibold">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">Treatments</a></li>
                        <li><a href="#" className="text-white">Skin & FAQ</a></li>
                        <li><a href="#" className="text-white">MEDICAL CLINIC</a></li>
                        <li><a href="#" className="text-white">Photogallery</a></li>
                        <li><a href="#" className="text-white">Media</a></li>
                        <li><a href="#" className="text-white">ABOUT US</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

