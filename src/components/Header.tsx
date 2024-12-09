import Link from "next/link"
import { AlignRight, Heart, Search, ShoppingCart, UserRoundSearch } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function Headerpage() {
    return (
        <header className="flex justify-between items-center mx-auto md:px-16 md:py-2 p-3 px-7 bg-[#FBEBB5] font-sans sticky top-0 ">
            {/* logo */}
            <div data-aos="fade-right">
               <Link href="/"><h2 className="font-semibold text-xl">Hackathon</h2></Link> 

            </div>

            {/* navbar */}
            <ul className="hidden md:block md:flex-row flex-col " data-aos="fade-left" >
                <li className="space-x-10  ">
                    <Link className="hover:text-blue-600" href="/">Home</Link>
                    <Link className="hover:text-blue-600" href="/Shop">Shop</Link>
                    <Link className="hover:text-blue-600" href="/Blog">Blogs</Link>
                    <Link className="hover:text-blue-600" href="/Contact">Contact</Link>


                </li>


            </ul >
            <div className="md:flex-row  flex gap-4  ">
                <Link href="/Account"><UserRoundSearch /></Link>
                <a href=""><Search /></a>
                <a href=""><Heart /></a>
                <Link href="/CartProducts"><ShoppingCart /></Link>
            </div>



            <Sheet>

                <SheetTrigger className="md:hidden">
                    <AlignRight />
                </SheetTrigger>

                <SheetContent className="bg-[#FFF9E5] py-5">
                    <ul  >
                        <li className="md:flex-row flex-col flex ">
                            <Link className="hover:text-blue-600" href="/">Home</Link>
                            <Link className="hover:text-blue-600" href="/Shop">Shop</Link>
                            <Link className="hover:text-blue-600" href="/Blog">Blogs</Link>
                            <Link className="hover:text-blue-600" href="/Contact">Contact</Link>

                        </li>
                    </ul >

                </SheetContent>
            </Sheet>

        </header>
    )
}