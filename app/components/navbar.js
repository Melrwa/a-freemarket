import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
})

export default function NavBar() {
    return (
        <>
            <div className="flex w-full h-16 bg-[#ECF0E9] gap-4 items-center px-6 lg:px-12 fixed top-0 z-50">
                <div>
                    <h1 className={`${roboto.className} antialiased text-[24px] lg:text-[40px] text-[#336633]`}>
                        AFreeMarket
                    </h1>
                </div>
                <div className="ml-auto flex gap-4 lg:gap-8 items-center text-[14px] lg:text-[16px]">
                    <Link href="/" className="hover:bg-[#336633] hover:rounded-[12px] hover:text-white p-2 transition-all">Home</Link>
                    <Link href="/businesses" className="hover:bg-[#336633] hover:rounded-[12px] hover:text-white p-2 transition-all">Businesses</Link>
                    <Link href="/addbiz" className="hover:bg-[#336633] hover:rounded-[12px] hover:text-white p-2 transition-all">Add a business</Link>
                    <button className="bg-[#336633] px-4 lg:px-8 py-1 rounded-lg text-white hover:bg-[#ECF0E9] hover:rounded-[10px] hover:text-black hover:border hover:border-black transition-all">
                        Sign Up/Login
                    </button>
                </div>
            </div>

        </>
    )
}