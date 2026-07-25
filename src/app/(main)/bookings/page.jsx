import { BookingDelete } from "@/components/bookingDelete/BookingDelete";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

const BookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();

  const totalSpent = bookings.reduce(
    (sum, booking) => sum + Number(booking.facilityPrice * booking.bookingDuration),
    0,
  );

  return (
    <section className="min-h-screen bg-[#040C13] px-5 py-30">
      <div className="max-w-6xl mx-auto space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            My Bookings
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            All your reservations in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#141a21] border border-[#1e2631] rounded-xl p-5 shadow-sm">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Total Bookings
            </p>
            <h2 className="text-3xl font-extrabold text-emerald-400 mt-2">
              {bookings.length}
            </h2>
          </div>

          <div className="bg-[#141a21] border border-[#1e2631] rounded-xl p-5 shadow-sm">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Spent
            </p>
            <h2 className="text-3xl font-extrabold text-emerald-400 mt-2">
              ৳{totalSpent}
            </h2>
          </div>
        </div>

        <div className="bg-[#141a21] border border-[#1e2631] rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#1e2631] bg-[#0f141a]/60 text-xs text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Facility</th>
                  <th className="py-4 px-6 font-semibold">Date</th>
                  <th className="py-4 px-6 font-semibold">Start Time</th>
                  <th className="py-4 px-6 font-semibold">Duration</th>
                  <th className="py-4 px-6 font-semibold">Total</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#1e2631]/60">
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="hover:bg-[#1a222c]/50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#1e2631] flex-shrink-0">
                          <Image
                            src={booking.facilityImage || "/placeholder.jpg"}
                            alt={booking.facilityName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="font-semibold text-white">
                            {booking.facilityName}
                          </h2>
                          <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                            <MdLocationOn className="text-gray-400 shrink-0" />
                            <span>{booking.facilityLocation}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-gray-300 font-medium">
                      {new Date(booking.bookingDate).toISOString().split("T")[0]}
                    </td>

                    <td className="py-4 px-6 text-gray-300 font-medium">
                      {booking.bookingTime}
                    </td>

                    <td className="py-4 px-6 text-gray-300 font-medium">
                      {booking.bookingDuration}{" "}
                      {typeof booking.bookingDuration === "number" ? "hrs" : "Hour"}
                    </td>

                    <td className="py-4 px-6 font-bold text-emerald-400">
                      ৳{booking.facilityPrice}
                    </td>

                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Pending
                      </span>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <BookingDelete bookingId={booking._id}></BookingDelete>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {bookings.length === 0 && (
          <div className="bg-[#141a21] border border-[#1e2631] rounded-xl p-16 text-center shadow-xl">
            <h2 className="text-xl font-semibold text-white">
              No bookings found
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Book your first sports facility to see it here.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default BookingPage;
