import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import EditModal from "../editModal/EditModal";

const ManageCard = ({facility}) => {
  return (
    <div
        className="flex items-center justify-between rounded-3xl border-2 border-slate-800 bg-[#0a151fdc] px-4 py-4 shadow-[0_0_30px_rgba(0,255,150,0.04)] transition hover:border-green-500/30 hover:scale-[1.02]"
    >
        <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-semibold text-white">
                        {facility.name}
                    </h2>

                    <span className="rounded-full bg-green-500/25 px-3 py-1 text-xs font-medium text-green-400">
                        {facility.sport}
                    </span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-sm text-slate-400">
                    <IoLocationOutline size={15} />
                    <span>{facility.location}</span>
                </div>
                <div className="mt-2 flex items-center gap-4">
                    <span className="text-sm font-medium text-green-400">
                        ৳{facility.price}/hr
                    </span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <EditModal facility={facility}></EditModal>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-900 text-red-500 transition hover:bg-red-950">
                <RiDeleteBin6Line size={17} />
            </button>
        </div>
    </div>
  )
}
export default ManageCard