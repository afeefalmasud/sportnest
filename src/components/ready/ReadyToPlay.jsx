import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ReadyToPlay = () => {
  return (
    <section className="bg-[#040C13] py-30 px-5">
      <div className="container mx-auto">
        <div className="relative rounded-3xl border-2 border-white/10 overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.15),transparent_60%)]"></div>

          <div className="relative flex flex-col items-center text-center py-20 px-6">
            
            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)] mb-8">
              <FaRegCalendarAlt className="text-black text-xl" />
            </div>

            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl max-w-2xl font-bold text-[#EFF6FB]`}>
              Ready to play? Your court awaits.
            </h2>

            <p className="text-gray-400 text-sm mt-4 max-w-md">
              Join 50,000+ athletes booking premium venues on SportNest every
              week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-green-500 text-black font-semibold px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:bg-green-400 duration-300 cursor-pointer">
                Create Free Account
              </button>
              <Link href='/facilities'>
                <button className="flex items-center gap-2 border border-white/10 bg-[#09131d] text-white px-8 py-3 rounded-xl hover:bg-[#0d1824] duration-300 cursor-pointer">
                  Browse Venues
                  <FiUsers />
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToPlay;