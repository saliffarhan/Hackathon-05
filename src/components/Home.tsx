import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
    return (
        <div>
            <main className="lg:mx-w-[1450px] lg:h-[600px] sm:flex-col w-auto h-auto bg-[#FBEBB5] lg:px-16 md:pt-16 px-5 pt-10 sm:w-auto sm:h-auto ">
                <section className="lg:inline-flex justify-center items-center gap-28 ">
                    {/* left-side */}
                    <div className="lg:mx-w-[440px] lg:h-[275px] flex-1 ">
                        <h2 className="font-medium font-sans lg:text-[65px] text-[27px] sm:text-[32px] ">Rocket single seater</h2>
                        <button className="py-6 underline font-medium">Shop Now</button>

                    </div>
                    {/* right-side */}
                    <div className="flex-1 lg:ml-9">
                        <Image width={600} height={1000} src="/hero-img.png" alt="" />
                    </div>
                </section>
            </main>



            <main className="lg:mx-w-[1450px] h-auto bg-[#FAF4F4] flex-col w-auto flex justify-center items-center g ">
                <section className=" lg:inline-flex lg:gap-36 lg:px-16 px-16 py-16 lg:py-10">
                    {/* // box1 */}
                    <div className="boder boder rounded-md lg:w-[73%] h-auto ">
                        <Image className="mx-auto" width={290} height={200} src="/s-1.png" alt="" />
                        <h3 className="py-4 font-medium text-[25px]">Side Table</h3>
                        <button className="font-medium underline">View More</button>
                    </div>
                    {/* // box2 */}
                    <div className="boder boder rounded-md lg:w-[53%] h-auto lg:pt-0 pt-10 ">
                        <Image className="mx-auto lg:mt-9" width={400} height={200} src="/s-2.png" alt="" />
                        <h3 className="py-4 font-medium text-[25px]">Side Table</h3>
                        <button className="font-medium underline">View More</button>
                    </div>
                </section>
            </main>




            <main className="lg:mx-w-[1150px] mt-24 lg:h-[500px] lg:mx-[16px]  w-auto h-auto">
                <div className="text-center">
                    <h2 className="font-medium font-sans text-2xl">Top Picks For You</h2>
                    <p className="font-semibold text-xs font-sans pt-6">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>

                </div>
                <div className="lg:mx-w-[1150px] lg:h-[350px] w-auto h-auto flex-col flex justify-items-center items-center md:flex-wrap  ">
                    <section className=" mt-14 lg:inline-flex lg:gap-[40px] justify-between ">
                        {/* box1 */}
                        <div className="w-[270px] h-[350px]  ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center bg-slate-50">
                                <Image width={180} height={140} src="/3-1.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Trenton modular sofa_3</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>
                        </div>
                        {/* box2 */}
                        <div className="w-[270px] h-[350px] ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={160} height={110} src="/3-2.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Granite dining table with dining chair</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>

                        </div>
                        {/* box3 */}
                        <div className="w-[270px] h-[350px]">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={180} height={140} src="/3-3.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Outdoor bar table and stool</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>

                        </div>
                        {/* box4 */}
                        <div className="w-[270px] h-[350px] ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={160} height={140} src="/3-4.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Plain console with teak mirror</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>

                        </div>
                    </section>
                </div>
                <div className="text-center lg:pt-11">
                    <button className="font-medium underline">View More</button>
                </div>
            </main>



            <main className="lg:mx-w-[1440px]  h-auto bg-[#FFF9E5] lg:px-16 mt-10 flex-col">
                <section className="lg:flex justify-between ">
                    {/* left */}
                    <div >
                        <Image width={800} height={800} src="/sec-4-img.png" alt="" />
                    </div>
                    {/* right */}
                    <div className="lg:py-60 py-8 text-center">
                        <h3 className="font-medium text-lg py-2">New Arrivals</h3>
                        <h2 className="font-bold text-4xl pt-1">Asgaard sofa</h2>
                        <Link href="/Cart"><button title="Add to cart" className="border border-black px-9 py-2 mt-7 hover:bg-blue-950 hover:text-white">Order Now</button></Link>

                    </div>
                </section>
            </main>




            <section className="bg-BannerImage bg-repeat bg-cover bg-left lg:mx-w-[100%] lg:h-[70vh]">
                <div className="flex justify-self-center py-32 items-center flex-col">
                    <h2 className="font-bold font-sans text-5xl py-3">Our Instagram</h2>
                    <p className="font-medium py-3">Follow our store on Instagram</p>
                    <button className="bg-[#FAF4F4] border-b-8 px-8 rounded-3xl py-2">Follow Us</button>
                </div>
            </section>


        </div>



    )
}