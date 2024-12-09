import Image from "next/image"
import Link from "next/link"

export default function Cart() {
    return (
        <div>
            <main className="lg:mx-w-[1100px] lg:h-[700px] ">
                <section className="lg:inline-flex justify-between items-center lg:gap-20 mx-auto w-auto h-auto lg:px-16 px-4">
                    {/* left */}
                    <div className="lg:w-[550px] ">
                        <Image width={580} height={480} src="/sec-4-img.png" alt="" />

                    </div>
                    {/* right */}
                    <div className="lg:w-[500px] lg:h-[700px] py-28 ">
                        <h2 className="font-semibold text-3xl">Asgaard sofa</h2>
                        <p className="py-3">Rs. 250,000.00</p>
                        <p>star</p>
                        <p className="font-normal font-sans text-sm py-3">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                        <p className="font-medium">Size</p>
                        <p className="bg-[#FBEBB5] px-2 w-[25px] rounded-md my-1">L</p>
                        <p className="bg-[#FBEBB5] px-1 w-[30px] rounded-md my-1">XL</p>
                        <p className="bg-[#FBEBB5] px-1 w-[30px] rounded-md">XS</p>
                        <div className="space-x-5">
                            <input className="w-[100px] rounded-xl px-3 mt-6" type="number" name="" id="" placeholder="quantity" />
                           <Link href="/CartProducts"><button className="border border-black px-6 py-2 rounded-lg hover:bg-blue-950 hover:text-white">Add to Cart</button></Link> 
                        </div>
                        <div className="flex gap-14 mt-11">
                            <p>SKU</p>
                            <p>SS001</p>
                        </div>
                        <div className="flex gap-5">
                            <p>Category</p>
                            <p>Sofas</p>
                        </div>
                        <div className="flex gap-14">
                            <p>Tags</p>
                            <p>Sofa, Chair, Home, Shop</p>
                        </div>
                        <p>Share</p>
                    </div>
                </section>
            </main>



            <main className="lg:mx-w-[1440px] lg:h-[700px] w-auto h-auto  ">
                <section className="lg:px-0 px-5">
                    <div className="lg:w-[650px] lg:h-[30px] lg:flex justify-self-center text-center gap-14 py-3 w-auto h-auto">
                        <h2 className="font-medium text-xl">Description</h2>
                        <p>Additional Information</p>
                        <p>Reviews [5]</p>
                    </div>
                    <div className="flex-col lg:flex justify-center items-center mt-5 lg:mt-16 w-auto h-auto">
                        <p className="lg:w-[1025px] lg:h-[50px] w-auto ">Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                        <p className="lg:w-[1025px] w-auto lg:h-[50px] py-6">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    </div>
                    {/* img */}
                    <div className="lg:mx-w-[1440px] lg:h-[350px] flex-col">
                        <div className=" lg:mt-32 lg:px-16 lg:inline-flex lg:gap-5 ">
                            <Image className="bg-[#FFF9E5]" width={600} height={600} src="/single-d-img.png" alt="" />
                            <Image className="bg-[#FFF9E5] lg:mt-0 mt-4" width={600} height={600} src="/single2-d-img.png" alt="" />
                        </div>
                    </div>
                </section>
            </main>




            <main className="lg:mx-w-[1150px] mt-24 lg:h-[500px] lg:mx-[16px]  w-auto h-auto">
                <div className="text-center">
                    <h2 className="font-semibold font-sans text-2xl">Related Products</h2>

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





        </div>
    )
}