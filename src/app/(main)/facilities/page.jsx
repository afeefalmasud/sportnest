import FacilityCard from "@/components/facilitiesCard/Card";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const facilitespage = async() => {
  const res = await fetch('http://localhost:5000/facility');
  const facilities = await res.json();
  return (
    <div className="min-h-screen bg-[#040C13] px-5 py-30">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className={`${spaceGrotesk.className} text-5xl font-bold text-[#EFF6FB]`}>All facilities</h2>
          <p className="mt-2 text-[#8E9AA4]">Search across 6+ premium venues curated for serious players.</p>
        </div>
        <div>
          <p className="mb-6 text-[#8E9AA4]">{facilities.length} Results</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map(facility => (
            <FacilityCard key={facility._id} facility={facility}></FacilityCard>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default facilitespage