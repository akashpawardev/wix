
export default function Doctor() {
    return (
        <section className="bg-orange-100 py-12">
            <div className="container flex flex-col xl:flex-row mx-auto w-4/5">
                <div className="w-full xl:w-1/2">
                    <img src="/home.jpg" alt="" />
                </div>
                <div className="w-full xl:w-1/2 p-8 text-white bg-orange-400 flex flex-col gap-2">
                    <p className="text-xl font-bold ">DR. GEETA MEHRA FAZALBHOY</p>
                    <p className="text-sm">Managing Director & Founder Member of Skin & You Clinic & CapitalG Healthcare Multiventures Private Limited, Nariman Point, Mumbai. A leading South Mumbai Skin Lasers & Aesthetic treatment clinic.</p>
                    <p className="text-sm">Dr. Geeta Mehra Fazalbhoy was 1st to introduce Micro Current Non Invasive Technology and Worlds leading RF Skin</p>
                    <button className="mt-4 shadow-md bg-orange-500 text-gray-200 px-5 py-2.5 w-32 border-2 text-xs font-medium border-gray-300">READ MORE</button>
                </div>
            </div>
        </section>
    )
}
