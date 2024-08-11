
export default function Treatments() {
    return (
        <section id="treatments" className="py-12 bg-orange-400">
            <div className="container mx-auto w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <img src="/treat1.jpg" width={"100%"} alt="" />
                    <div className="bg-white p-5 shadow-md h-24">
                        <h3 className="text-lg  font-semibold mb-2">FACE AND BODY TIGHTENING</h3>
                        {/* <p className="text-gray-600">Effective treatment for skin tightening.</p> */}
                    </div>
                </div>
                <div>
                    <img src="/treat2.jpg" width={"100%"} alt="" />
                    <div className="bg-white p-4 shadow-md h-24">
                        <h3 className="text-lg font-semibold mb-2">DERMATOLOGY CLINIC</h3>
                        {/* <p className="text-gray-600">Comprehensive skin care solutions.</p> */}
                    </div>
                </div>
                <div>
                    <img src="/treat3.jpg" width={"100%"} alt="" />
                    <div className="bg-white p-4 shadow-md h-24">
                        <h3 className="text-lg font-semibold mb-2">WEDDING / BRIDAL TREATMENT</h3>
                        {/* <p className="text-gray-600">Get ready for your big day.</p> */}
                    </div>
                </div>
                <div>
                    <img src="/treat4.jpg" width={"100%"} alt="" />
                    <div className="bg-white p-4 shadow-md h-24">
                        <h3 className="text-lg font-semibold mb-2">SEMI-PERMANENT MAKEUP/MEDICAL TATTOO</h3>
                        {/* <p className="text-gray-600">Long-lasting beauty solutions.</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
