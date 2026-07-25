'use client'

import Link from "next/link";
import { IoArrowBack, IoWarningOutline } from "react-icons/io5";

export default function ErrorPage({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#040C13] px-6">
      <div className="text-center max-w-md">

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#111920] border border-white/10">
          <IoWarningOutline className="text-5xl text-[#51D75E]" />
        </div>

        <h1 className="text-7xl font-bold text-[#EFF6FB]">
          500
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-white">
          Something went wrong!
        </h2>

        <p className="mt-3 text-[#8E9AA4]">
          We couldn't complete your request. Please try again or return to the
          homepage.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-[#51D75E] px-6 py-3 font-semibold text-[#040C13] transition hover:scale-105"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-[#EFF6FB] transition hover:bg-white/10"
          >
            <IoArrowBack />
            Home
          </Link>
        </div>

      </div>
    </div>
  )
}