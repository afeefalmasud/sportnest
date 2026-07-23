import Image from "next/image"
import NavLink from "./NavLink"
import Link from "next/link"
import NavUser from "./NavUser"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md border-b border-white/5 z-50 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href='/' className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#51D75E] to-[#00BE6A] flex items-center justify-center">
                <Image src="/assets/cup.png" alt="logo" width={20} height={20} />
              </div>
              <h2 className="text-[#EFF6FB] text-xl font-semibold">
                Sport<span className="text-[#51D75E]">Nest</span>
              </h2>
            </Link>
            <div>
              <ul className="text-[14px] flex gap-4">
                <li><NavLink href='/'>Home</NavLink></li>
                <li><NavLink href='/facilities'>All Facilities</NavLink></li>
                <li><NavLink href='/bookings'>My Bookings</NavLink></li>
                <li><NavLink href='/add'>Add Facility</NavLink></li>
                <li><NavLink href='/manage'>Manage</NavLink></li>
              </ul>
            </div>
            
            <div className="flex items-center gap-6">
               <NavUser></NavUser>
            </div>
        </div>
    </div>
  )
}

export default Navbar