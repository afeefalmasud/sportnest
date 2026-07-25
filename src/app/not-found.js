import Link from "next/link";
import { IoArrowBack, IoSearchOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#040C13] px-6">
      <div className="max-w-lg w-full text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#111920] border border-white/10">
          <IoSearchOutline className="text-6xl text-[#51D75E]" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-[#EFF6FB]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-[#8E9AA4] leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Let's get you back to the game.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-[#51D75E] px-7 py-3 font-semibold text-[#040C13] transition hover:scale-105"
          >
            Go Home
          </Link>

          <Link
            href="/facilities"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3 text-[#EFF6FB] transition hover:bg-white/10"
          >
            <IoArrowBack />
            Explore Facilities
          </Link>

        </div>

      </div>
    </div>
  );
};

export default NotFound;