import FacilityDetails from "@/components/facilitydetails/FacilityDetails";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const detailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`);
  const facilityDetails = await res.json();

  return (
    <div className="bg-[#040C13] min-h-screen px-5  py-40 md:py-30">
        <div className="container mx-auto">
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition mb-8"
          >
            <IoArrowBack />
            Back to Facilities
          </Link>

          <FacilityDetails facilityDetails={facilityDetails} />
        </div>
    </div>
  );
};

export default detailsPage;