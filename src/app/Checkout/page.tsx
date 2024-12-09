import Link from "next/link"

export default function Checkout() {
    return (
        <div>

            <section className="bg-ShopImage bg-repeat bg-cover lg:mx-auto  lg:mx-w-[100%] lg:h-[50vh]">
                <div className="flex justify-self-center py-24 items-center flex-col">
                    <h2 className="font-medium font-sans text-4xl py-3">CheckOut</h2>
                    <div className="flex gap-5 py-3">
                      <Link href="/"><button className="font-medium">Home</button></Link>  
                        <button className="font-medium">Checkout</button>
                    </div>
                </div>
            </section>





            <main className="lg:mx-auto lg:max-w-[1440px] lg:h-[1050px] flex flex-col w-full h-auto py-4">
                <section className="flex flex-col lg:flex-row lg:gap-20 lg:mx-16">
                    {/* Left-side */}
                    <div className="lg:w-[530px] mt-7 lg:mt-0 lg:p-20 p-6 w-full">
                        <h2 className="font-semibold text-3xl">Billing Details</h2>

                        <p className="py-4 font-sans">Full Name</p>
                        <input className="w-full lg:w-[520px] py-3 border border-neutral-500 rounded-xl" type="text" />

                        <p className="py-4 font-sans">Company Name (optional)</p>
                        <input className="w-full lg:w-[520px] py-3 border border-neutral-500 rounded-xl" type="email" />

                        <p className="py-4 font-sans">Country Region</p>
                        <select className="w-full lg:w-[520px] py-3 border border-neutral-500 rounded-xl" name="" id="">
                            <option value="Pakistan">Pakistan</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="Japan">Japan</option>
                            <option value="USA">USA</option>
                        </select>

                        <p className="py-4 font-sans">Street Address</p>
                        <input className="w-full lg:w-[520px] py-3 border border-neutral-500 rounded-xl" type="text" />

                        <p className="py-4 font-sans">Town / City</p>
                        <input className="w-full lg:w-[520px] py-3 border border-neutral-500 rounded-xl" type="text" />

                        <p className="py-4 font-sans">Province</p>
                        <select className="w-full lg:w-[520px] py-3 border border-neutral-500 rounded-xl" name="" id="">
                            <option value="Pakistan">Karachi</option>
                            <option value="India">Hyderabad</option>
                            <option value="China">Umerkot</option>
                            <option value="Japan">Multan</option>
                            <option value="USA">Lahore</option>
                        </select>

                        <p className="py-4 font-sans">Zip Code</p>
                        <input className="w-full lg:w-[520px] py-3 border border-neutral-500 rounded-xl" type="number" />

                        <div className="mt-6 flex">
                            <button className="border border-black px-14 py-2 rounded-lg  hover:bg-blue-950 hover:text-white">Submit</button>
                        </div>
                    </div>

                    {/* Right-side */}
                    <div className="lg:w-[483px] lg:p-14 p-6 w-full rounded-lg">
                        <div className="flex justify-between py-4">
                            <h2 className="font-medium text-2xl">Product</h2>
                            <h2 className="font-medium text-2xl">Sub Total</h2>
                        </div>
                        <div className="flex justify-between py-2">
                            <p>Asgaard sofa</p>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className="flex justify-between py-2">
                            <p>Subtotal</p>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className="flex justify-between py-2">
                            <p>Total</p>
                            <p className="font-bold text-[#B88E2F]">Rs. 250,000.00</p>
                        </div>
                        <div className="py-5">
                            <h4 className="font-semibold text-xl py-4">Direct Bank Transfer</h4>
                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <button className="border border-black mt-4 px-14 py-2 rounded-lg hover:bg-blue-950 hover:text-white">Place order</button>
                        </div>
                    </div>
                </section>
            </main>
            


            <section className="lg:mx-w-[1440px] lg:h-[300px] lg:mt-[0px]  bg-[#FAF4F4] flex-col mx-auto  w-auto h-auto " >
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
