import { IoLocationOutline } from "react-icons/io5";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const Featured = async() => {
    const res = await fetch('http://localhost:5000/facility');
    const facilities = await res.json();
    const featuredFacilties = facilities.filter(facility => facility.featured=== true);
    console.log(featuredFacilties);
    return (
        <section id='featured' className="bg-[#040C13] py-30 px-5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-end justify-between mb-16">
                    <div>
                        <p className="text-sm text-green-400 font-medium mb-2">
                            Featured Venues
                        </p>
                        <h2 className={`${spaceGrotesk.className} text-2xl md:text-4xl font-bold text-[#EFF6FB]`}>
                            Top-rated facilities this week
                        </h2>
                    </div>
                    <Link href='/facilities'>
                        <button className="flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition cursor-pointer">
                            View all
                            <span className="text-lg">→</span>
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredFacilties.map((featured) =>(
                                <div key={featured._id} className="bg-[#0a151fdc] text-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
                                    <div className="relative h-65 w-full">
                                        <img
                                        src={featured.image}
                                        alt={featured.name}
                                        className="h-full w-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-green-500 text-xs px-3 py-1 rounded-full">
                                        {featured.sport}
                                        </span>
                                    </div>
                                    <div className="p-5 space-y-3.5">
                                        <h2 className="text-lg font-semibold">
                                            {featured.name}
                                        </h2>
                                        <p className="text-sm text-gray-400 flex items-center gap-2">
                                            <span><IoLocationOutline /></span> {featured.location}
                                        </p>
                                        <div className="flex items-center justify-between pt-3">
                                            <div>
                                                <p className="text-green-400 font-semibold">
                                                    ৳{featured.price}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Capacity: {featured.capacity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Featured