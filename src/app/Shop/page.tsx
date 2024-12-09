import Link from "next/link"
import Image from "next/image"


export default function Shop() {
    return (
        <div >

            <section className="bg-ShopImage bg-repeat bg-cover  lg:mx-w-[100%] lg:h-[50vh]">
                <div className="flex justify-self-center py-24 items-center flex-col">
                    <h2 className="font-medium font-sans text-4xl py-3">Shop</h2>
                    <div className="flex gap-5 py-3">
                        <Link href="/"><button className="font-medium">Home</button></Link>
                        <button className="font-medium">Shop</button>
                    </div>
                </div>
            </section>


            <main className="lg:mx-w-[1440px] lg:h-[70px] bg-[#FAF4F4] md:block hidden">
                <section className="px-16 py-5">
                    <div className="flex gap-6 ">
                        <Image width={18} height={15} src="/s-i-1.png" alt="" />
                        <p>Filter</p>
                        <Image width={18} height={15} src="/s-i-2.png" alt="" />
                        <Image width={19} height={15} src="/s-i-3.png" alt="" />
                        <p>|</p>
                        <p>Showing 1–16 of 32 results</p>

                        <div className=" flex ml-auto gap-7">
                            <p>Show</p>
                            <p className="px-3 py-1 bg-white">16</p>
                            <p>Short by</p>
                            <p className="px-3 py-1 bg-white">Default</p>
                        </div>
                    </div>
                </section>
            </main>



            <main className="lg:mx-w-[1150px] mt-2 lg:h-[1220px] lg:px-[16px]  w-auto h-auto ">
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
                {/* more 2 boxses */}
                <div className="lg:mx-w-[1150px] lg:h-[350px] w-auto h-auto flex-col flex justify-items-center items-center md:flex-wrap  ">
                    <section className=" mt-14 lg:inline-flex lg:gap-[40px] justify-between ">
                        {/* box5 */}
                        <div className="w-[270px] h-[350px]  ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center bg-slate-50">
                                <Image width={180} height={140} src="/sp-1.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Plain console_</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>
                        </div>
                        {/* box6 */}
                        <div className="w-[270px] h-[350px] ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={160} height={110} src="/sp-2.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">SJP_0825 </h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>



                        </div>
                        {/* box7*/}
                        <div className="w-[270px] h-[350px]">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={180} height={140} src="/sp-3.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Bella chair and table</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>

                        </div>
                        {/* box8 */}
                        <div className="w-[270px] h-[350px] ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={160} height={140} src="/sp-4.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Reclaimed teak coffee table</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>

                        </div>
                    </section>
                </div>
                {/* more boxses 3  */}
                <div className="lg:mx-w-[1150px] lg:h-[350px] w-auto h-auto flex-col flex justify-items-center items-center md:flex-wrap  ">
                    <section className=" mt-14 lg:inline-flex lg:gap-[40px] justify-between ">
                        {/* box9 */}
                        <div className="w-[270px] h-[350px]  ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center bg-slate-50">
                                <Image width={180} height={140} src="/sp-5.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Reclaimed teak Sideboard</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>
                        </div>
                        {/* box10 */}
                        <div className="w-[270px] h-[350px] ">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={160} height={110} src="/sp-6.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Maya sofa three seater</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>

                        </div>
                        {/* box11 */}
                        <div className="w-[270px] h-[350px]">
                            <div className="w-[270px] h-[230px] flex justify-center items-center  bg-slate-50">
                                <Image width={180} height={140} src="/sec-4-img.png" alt="" />
                            </div>
                            <h3 className="font-semibold text-sm font-sans pt-2">Outdoor bar table and stool</h3>
                            <p className="font-bold py-2">Rs. 25,000.00</p>

                        </div>
                        {/* box12 */}
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
                    <button className="font-medium border border-black px-4 py-1 hover:bg-[#FBEBB5]">View More</button>
                </div>
            </main>



            <section className="lg:mx-w-[1440px] lg:h-[300px] mt-[10px]  bg-[#FAF4F4] flex-col mx-auto  w-auto h-auto " >

                <div className="lg:inline-flex lg:py-20 lg:px-16 gap-14 px-4 py-5">
                    {/* box1 */}
                    <div className="boder rounded-md lg:w-[365px] lg:h-[110px] relative cursor-pointer ">
                        <h2 className="font-semibold text-xl  py-1 pt-8">Free Delivery</h2>
                        <p className="font-sans ">For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    {/* box2 */}
                    <div className="boder rounded-md lg:w-[365px] lg:h-[110px]  relative cursor-pointer ">
                        <h2 className="font-semibold text-xl  py-1 pt-8">90 Days Return</h2>
                        <p className="font-sans ">If goods have problems, consectetur adipim scing elit.</p>
                    </div>
                    {/* box3 */}
                    <div className="boder rounded-md lg:w-[365px] lg:h-[110px]  relative cursor-pointer ">
                        <h2 className="font-semibold text-xl py-1 pt-8">Secure Payment</h2>
                        <p className="font-sans ">100% secure payment, consectetur adipim scing elit.</p>
                    </div>

                </div>

            </section>





        </div>





    )
}