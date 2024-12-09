import Image from "next/image"
import Link from "next/link"

export default function CartProducts() {
    return (
        <div>

            <section className="bg-ShopImage bg-repeat bg-cover lg:mx-auto  lg:mx-w-[100%] lg:h-[50vh]">
                <div className="flex justify-self-center py-24 items-center flex-col">
                    <h2 className="font-medium font-sans text-4xl py-3">Cart</h2>
                    <div className="flex gap-5 py-3">
                      <a href="/"><button className="font-medium">Home</button></a>  
                        <button className="font-medium">Cart</button>
                    </div>
                </div>
            </section>




            <main className="lg:mx-auto lg:max-w-[1440px] lg:h-[500px]  p-4">
                <section className="flex flex-col gap-10 md:flex-row">
                    {/* Left */}
                    <div className="w-full lg:w-[800px]  p-4 md:p-10 flex flex-col md:flex-row gap-4 md:gap-11 items-center">
                        <Image
                            className="bg-[#FBEBB5] rounded-2xl"
                            width={150}
                            height={150}
                            src="/cart.png"
                            alt="Asgaard sofa"
                        />
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                            <p className="text-center md:text-left">Asgaard sofa</p>
                            <p className="text-center md:text-left">Rs. 250,000.00</p>
                            <input
                                className="w-[50px] h-[30px] border border-gray-300 rounded-md text-center"
                                type="number"
                                placeholder="1"
                            />
                            <p className="font-medium">Rs. 250,000.00</p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full md:w-[380px] bg-[#FFF9E5] px-6 py-6 md:px-20 md:py-20 rounded-lg">
                        <h2 className="font-semibold text-2xl text-center mb-4">Cart Table</h2>
                        <div className="flex justify-between py-2">
                            <h4>Sub Total</h4>
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className="flex justify-between py-2">
                            <h4>Total</h4>
                            <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                        </div>
                       <Link href="/Checkout"><button className="w-full px-6 py-3 border border-black mt-4 hover: hover:bg-blue-950  hover:text-white transition-all">
                            Check Out
                        </button></Link> 
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