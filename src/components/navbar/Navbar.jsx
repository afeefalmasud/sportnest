"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import NavUser from "./NavUser";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md border-b border-white/5 z-50">
      <div className="container mx-auto px-5 py-4 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">

      
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#51D75E] to-[#00BE6A] flex items-center justify-center">
            <Image
              src="/assets/cup.png"
              alt="logo"
              width={20}
              height={20}
            />
          </div>

          <h2 className="text-[#EFF6FB] text-xl font-semibold">
            Sport<span className="text-[#51D75E]">Nest</span>
          </h2>
        </Link>

   
        <ul className="hidden lg:flex items-center gap-5 text-sm">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/facilities">All Facilities</NavLink>
          </li>
          <li>
            <NavLink href="/bookings">My Bookings</NavLink>
          </li>
          <li>
            <NavLink href="/add">Add Facility</NavLink>
          </li>
          <li>
            <NavLink href="/manage">Manage</NavLink>
          </li>
        </ul>

  
        <div className="hidden lg:flex ">
          <NavUser />
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <NavUser />

          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#111920] border-t border-white/10">
          <div className="flex flex-col px-5 py-5 space-y-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/facilities">All Facilities</NavLink>
            <NavLink href="/bookings">My Bookings</NavLink>
            <NavLink href="/add">Add Facility</NavLink>
            <NavLink href="/manage">Manage</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;