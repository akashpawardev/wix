import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-orange-200">
            <div className="container mx-auto flex flex-col lg:flex-col items-center relative">
                <img src="/lipocontrast.jpg" width={"100%"} alt="Lipocontrast Device" />

                <div className="hidden sm:flex w-full sm:p-2 xl:p-6 flex-row absolute bottom-0 left-0 justify-between">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-1 items-center">
                            <div><MdLocationOn className="text-xl" /></div>
                            <div className="flex flex-col text-sm">
                                <div>115 B Mittal Court,</div>
                                <div>Nariman Point, Mumbai 400 021</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <div><FaPhoneAlt /></div>
                            <div>+91 2222843000 | +91 2222825555</div>
                        </div>
                        <div className="flex gap-2 text-xl mt-2">
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                            <FaSquareXTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                    <div className="flex items-end p-4">
                        <a href="#contact">
                            <button className="bg-white border border-orange-400 rounded-full py-1 px-4 text-orange-400 font-semibold">Book Appointment</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
