import Link from "next/link"

export default function Account() {
    return (
        <div>

            <section className="bg-ShopImage bg-repeat bg-cover  lg:mx-w-[100%] lg:h-[50vh]">
                <div className="flex justify-self-center py-24 items-center flex-col">
                    <h2 className="font-semibold font-sans text-4xl py-3">Account</h2>
                    <div className="flex gap-5 py-3">

                        <Link href="/"><button className="font-medium">Home</button></Link>
                        <button >Account</button>
                    </div>
                </div>
            </section>



            <main className="lg:mx-w-[1440px] lg:h-[550px] lg:py-0 py-4  flex-col w-auto h-auto  ">
                <section className="lg:mx-16 lg:inline-flex lg:gap-20 ">
                    {/* left-side */}
                    <div className="lg:w-[550px] lg:h-[630px]  lg:p-20 px-16 lg:px-0 ">
                        <h2 className="font-medium text-2xl">Log in</h2>
                        <p className="py-4 font-sans">Username or email address</p>
                        <input className="lg:w-[250px] lg:py-3 border border-black rounded-xl" type="text" />
                        <p className="font-medium text-xl py-5">Password</p>
                        <input className="lg:w-[250px] lg:py-3 border border-black rounded-xl" type="password" />
                        <div className="flex gap-6 mt-7">
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <div className="flex gap-6 mt-5">
                            <button className="border border-black px-11 py-2 lg:px-14 rounded-lg lg:py-2">Login</button>
                            <p className="pt-3">Lost Your Password?</p>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className="lg:w-[550px] lg:h-[630px] lg:mt-0 mt-7 lg:p-20 px-16 lg:px-0">
                        <h2 className="font-medium text-2xl">Register</h2>
                        <p className="py-4 font-sans">Email address</p>
                        <input className="lg:w-[250px] lg:py-3 border border-black rounded-xl" type="text" />
                        <div className="lg:w-[400px] h-auto py-5">
                            <p className="text-xs">A link to set a new password will be sent to your email address.</p>
                            <p className="text-xs py-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        </div>

                        <button className="border border-black px-14 rounded-lg py-2">Register</button>
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