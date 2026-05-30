import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-[#040C13] text-[#8E9AA4] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-0 py-16">
        <div className="flex  justify-center text-center lg:text-start lg:justify-between items-center lg:items-start flex-col lg:flex-row space-y-4">
          
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#51D75E] to-[#00BE6A] flex items-center justify-center">
                <Image src="/assets/cup.png" alt="logo" width={20} height={20} />
              </div>

              <h2 className="text-[#EFF6FB] text-xl font-semibold">
                Sport<span className="text-[#51D75E]">Nest</span>
              </h2>
            </div>

            <p className="text-sm leading-7 max-w-xs">
              The premium platform for booking world-class sports facilities,
              instantly.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-[#51D75E] hover:text-[#51D75E] transition-all duration-300"
              >
                <FaXTwitter size={14} />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-[#51D75E] hover:text-[#51D75E] transition-all duration-300"
              >
                <FaInstagram size={14} />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-[#51D75E] hover:text-[#51D75E] transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-[#51D75E] hover:text-[#51D75E] transition-all duration-300"
              >
                <FaYoutube size={14} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[#EFF6FB] font-medium mb-5">Platform</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  All Facilities
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  My Bookings
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  List Your Venue
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  Manage Facilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#EFF6FB] font-medium mb-5">Company</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-[#51D75E] transition">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#EFF6FB] font-medium mb-5">Contact</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin
                  size={18}
                  className="text-[#51D75E] mt-0.5 shrink-0"
                />
                <span>221B Athlete Ave, NYC</span>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineEnvelope
                  size={18}
                  className="text-[#51D75E]"
                />
                <span>hello@sportnest.app</span>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlinePhone size={18} className="text-[#51D75E]" />
                <span>+1 (555) 010-2025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 SportNest | Afeef Al Masud. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#51D75E] transition">
              Privacy
            </Link>

            <Link href="#" className="hover:text-[#51D75E] transition">
              Terms
            </Link>

            <Link href="#" className="hover:text-[#51D75E] transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}