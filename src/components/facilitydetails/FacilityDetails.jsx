"use client";

import { useState } from "react";
import {
  IoLocationOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoTimeOutline,
  IoAdd,
  IoRemove,
} from "react-icons/io5";

const FacilityDetails = ({ facilityDetails }) => {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState(1);

  const timeSlots = [
    "08:00 AM",
    "10:00 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
    "08:00 PM",
  ];

  const increaseDuration = () => {
    setDuration(duration + 1);
  };

  const decreaseDuration = () => {
    if (duration > 1) {
      setDuration(duration - 1);
    }
  };

  const totalPrice = facilityDetails.price * duration;

  return (
    <div className="grid lg:grid-cols-3 gap-8 text-white">

      <div className="lg:col-span-2 space-y-8">

        <div className="rounded-3xl overflow-hidden border border-white/10">
          <img
            src={facilityDetails.image}
            alt={facilityDetails.name}
            className="w-full h-105 object-cover"
          />
        </div>


        <div>
          <div className="inline-block px-4 py-1 rounded-full bg-green-400/10 text-green-400 text-sm mb-4">
            {facilityDetails.sport}
          </div>

          <h1 className="text-4xl font-bold mb-4">{facilityDetails.name}</h1>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-green-400 text-xl" />
              {facilityDetails.location}
            </div>

            <div className="flex items-center gap-2">
              <IoPeopleOutline className="text-green-400 text-xl" />
              Capacity: {facilityDetails.capacity}
            </div>
          </div>
        </div>

        <div className="bg-[#111920] rounded-2xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">About this facility</h2>

          <p className="text-gray-400 leading-relaxed">
            {facilityDetails.description}
          </p>
        </div>
      </div>


      <div>
        <div className="sticky top-10 bg-[#111920] rounded-3xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-400 text-sm">Price per hour</p>

              <h2 className="text-3xl font-bold text-green-400">
                ৳{facilityDetails.price}
              </h2>
            </div>
          </div>


          <label className="text-sm text-gray-400">Select Date</label>

          <div className="relative mt-2 mb-6">
            <IoCalendarOutline className="absolute left-3 top-4 text-green-400" />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
              w-full bg-[#040C13]
              border border-white/10
              rounded-xl
              py-3 pl-10 pr-3
              text-white
              outline-none
              "
            />
          </div>


          <label className="text-sm text-gray-400">Select Starting Time</label>

          <div className="grid grid-cols-2 gap-3 mt-3 mb-6">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
                  py-2 rounded-xl border transition
                  ${
                    selectedTime === time
                      ? "bg-green-400 text-black border-green-400"
                      : "border-white/10 hover:border-green-400"
                  }
                  `}
              >
                {time}
              </button>
            ))}
          </div>


          <label className="text-sm text-gray-400">Duration</label>

          <div className="flex items-center justify-between bg-[#040C13] rounded-xl p-3 mt-3 mb-6">
            <button
              onClick={decreaseDuration}
              className="p-2 rounded-lg hover:bg-white/10"
            >
              <IoRemove />
            </button>

            <span className="font-semibold">{duration} Hour</span>

            <button
              onClick={increaseDuration}
              className="p-2 rounded-lg hover:bg-white/10"
            >
              <IoAdd />
            </button>
          </div>


          <div className="border-t border-white/10 pt-5">
            <div className="flex justify-between text-gray-400 mb-3">
              <span>Total</span>

              <span className="text-white font-semibold">৳{totalPrice}</span>
            </div>

            <button
              className="
              w-full
              bg-green-400
              text-black
              font-semibold
              py-3
              rounded-xl
              hover:bg-green-300
              transition
              "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
