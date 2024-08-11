import { useState } from "react";
import axios from "axios";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [concern, setConcern] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:4000/bookappointment", {
                name, email, phone, concern
            });
            console.log(res);
        } catch (err) {
            console.error("Error booking appointment:", err);
        }
    }
    return (
        <div id="contact" className="bg-orange-100 flex justify-center">
            <div className="py-16 w-4/5 flex flex-col-reverse md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <div className="text-orange-400 text-lg font-bold mb-2">BOOK AN APPOINTMENT</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                        <input type="text" id="name" name="name" placeholder="Your Name" className="text-gray-400 bg-transparent border-b border-orange-400 py-1"
                            onChange={(e) => setName(e.target.value)} required
                        />
                        <input type="email" id="email" name="email" placeholder="Your Email" className="text-gray-400 bg-transparent border-b border-orange-400 py-1"
                            onChange={(e) => setEmail(e.target.value)} required
                        />
                        <input type="tel" id="phone" name="phone" placeholder="Your Phone" className="text-gray-400 bg-transparent border-b border-orange-400 py-1"
                            onChange={(e) => setPhone(e.target.value)} required
                        />
                    </div>
                    <textarea name="Your Concern" placeholder="Your Concern" id="" className="w-full h-24 border-b border-orange-400 bg-transparent"
                        onChange={(e) => setConcern(e.target.value)} />
                    <button className="px-6 py-3 rounded-sm text-xs font-bold mt-4 bg-orange-400 text-white" onClick={handleSubmit}>SEND</button>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-orange-400 text-lg font-bold mb-2">TESTIMONIALS</div>
                    <div className="w-full bg-white p-5 text-gray-500 shadow-md">
                        <span>For me Dr. Geeta was god sent. After having so many doctors treating me like a guinea pig it was her confidence and medication which helped me to recover. Very polite staff and a patient is in good and capable hand</span>
                        <div className="text-orange-400 font-semibold mt-4">KAVITANJALI PRASAD</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
