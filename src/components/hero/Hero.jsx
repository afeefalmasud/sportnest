import { FaArrowRight, FaStar } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-[url('/assets/hero.jpeg')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
   
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-sm text-green-400 text-sm">
          <IoShieldCheckmark />
          Trusted by 10,000+ athletes
        </div>

        <h1 className="max-w-5xl mx-auto text-5xl md:text-7xl font-bold text-white">
          Book Your Favorite{" "}
          <span className="text-green-400">
            Sports Facility
          </span>{" "}
          Instantly
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
          Discover and book the best sports facilities near you.
          From football fields to tennis courts, we have got you
          covered with instant booking and real-time availability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="flex items-center gap-2 px-7 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition cursor-pointer">
            Explore Facilities
            <FaArrowRight />
          </button>

          <button className="px-7 py-3 rounded-xl border-2 border-gray-700 bg-white/5 text-white hover:bg-white/10 hover:border-green-400 hover:text-green-200 transition cursor-pointer">
            List Your Venue
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-16 mt-14">
          <div>
            <h3 className="text-4xl font-bold text-green-400">
              500+
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Venues
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-400">
              50K+
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Bookings
            </p>
          </div>

          <div>
            <h3 className="flex items-center justify-center gap-1 text-4xl font-bold text-green-400">
              4.9
              <FaStar className="text-2xl" />
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;