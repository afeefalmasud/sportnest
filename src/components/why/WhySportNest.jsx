import { FaBolt, FaShieldAlt, FaClock, FaTrophy } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const features = [
  {
    icon: <FaBolt />,
    title: "Instant Booking",
    description:
      "Confirm your slot in under 30 seconds with real-time availability.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Venues",
    description:
      "Every facility is vetted by our team for quality and safety.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Slots",
    description:
      "Hourly bookings, day passes, or recurring sessions — your call.",
  },
  {
    icon: <FaTrophy />,
    title: "Premium Quality",
    description:
      "Pro-grade surfaces, lighting, and equipment at every venue.",
  },
];

const WhySportNest = () => {
  return (
    <section className="bg-[#040C13] py-30 px-5">
      <div className="container mx-auto">

        <div className="text-center mb-16">
          <p className="text-green-400 text-sm font-medium mb-3">
            Why SportNest
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl md:text-4xl mb-4 font-bold text-[#EFF6FB]`}>
            Built for athletes who hate waiting
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to find, book, and play — wrapped in a premium
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111920]/55 border-2 border-white/10 rounded-3xl p-6 hover:border-green-500/30 hover:scale-105 transition-all duration-200"
            >
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-black text-lg mb-6 shadow-[0_0_25px_rgba(34,197,94,0.5)]">
                    {feature.icon}
                </div>

                <h3 className="text-white text-xl font-semibold mb-3">
                    {feature.title}
                </h3>

                <p className="text-gray-400 text-sm">
                    {feature.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySportNest;