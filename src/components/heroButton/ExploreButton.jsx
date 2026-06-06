'use client'

import { FaArrowRight } from "react-icons/fa6"

const HeroExploreButton = () => {
    const handleButton = () => {
        const section = document.getElementById("featured");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

  return (
    <div>
        <button onClick={handleButton} className="flex items-center gap-2 px-7 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition cursor-pointer">
            Explore Facilities
            <FaArrowRight />
        </button>
    </div>
  )
}

export default HeroExploreButton