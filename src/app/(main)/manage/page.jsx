import { FiPlus } from "react-icons/fi";
import { Space_Grotesk } from "next/font/google";
import ManageCard from "@/components/manageCard/Card";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const FacilityList = async() => {
  const res = await fetch('http://localhost:5000/facility');
  const facilities = await res.json();
  return (
    <div className="min-h-screen bg-[#040C13] px-5 py-30">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className={`${spaceGrotesk.className} text-5xl font-bold text-[#EFF6FB]`}>Manage facilities</h2>
          <p className="mt-2 text-[#8E9AA4]">Edit or remove your listed venues.</p>
        </div>
        <div className="flex justify-end mb-6">
          <Link href='/add'>
            <button className="flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-green-400">
              <FiPlus size={18} />
              New Facility
            </button>
          </Link>
          
        </div>

          {/* Facilities */}
          <div className="space-y-5">
            {facilities.map((facility) => (
              <ManageCard key={facility._id} facility={facility}></ManageCard>
            ))}
          </div>
      </div>
    </div>
    
  );
}

export default FacilityList;