import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

const FacilityCard = ({ facility }) => {
  return (
    <div className="bg-[#0a151fdc] text-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <div className="relative h-65 w-full">
        <img
          src={facility.image}
          alt={facility.name}
          className="h-full w-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-green-500 text-xs px-3 py-1 rounded-full">
          {facility.sport}
        </span>
      </div>
      <div className="p-5 space-y-3.5">
        <h2 className="text-lg font-semibold">
          {facility.name}
        </h2>
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <span><IoLocationOutline /></span> {facility.location}
        </p>
        <div className="flex items-center justify-between pt-3">
          <div>
            <p className="text-green-400 font-semibold">
              ৳{facility.price}
            </p>
            <p className="text-xs text-gray-500">
              Capacity: {facility.capacity}
            </p>
          </div>
          <Link href={`/facilities/${facility._id}`}>
            <button  className="bg-green-500 hover:bg-green-400 text-black font-medium px-4 py-2 rounded-lg">
                Book Now
            </button>
          </Link>  
          
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;