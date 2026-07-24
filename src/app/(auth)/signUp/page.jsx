"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form } from "@heroui/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { Space_Grotesk } from "next/font/google";
import { Bounce, toast, ToastContainer } from "react-toastify";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const SignUpPage = () => {
  
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    });

    if(data){
      redirect('/signIn');
    }

    if (error) {
      toast.error("Sign up failed", {
        position: "top-center",
        theme: "dark",
        autoClose: 1500,
        transition: Bounce,
      });
    } else {
      toast.success("Account created successfully", {
        position: "top-center",
        theme: "dark",
        autoClose: 1500,
        transition: Bounce,
      });
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen bg-[#040C13] flex items-center justify-center px-5 py-20">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)]"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-sm text-green-400 text-sm">
            <IoShieldCheckmark />
            Join SportNest
          </div>
        </div>

        {/* Card */}
        <div className="bg-[#0a151fdc] border border-green-500/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1
              className={`${spaceGrotesk.className} text-4xl font-bold text-[#EFF6FB]`}
            >
              Sport
              <span className="text-green-400">Nest</span>
            </h1>

            <p className="mt-3 text-[#8E9AA4]">
              Create an account to start booking facilities
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            {/* Name */}

            <div className="space-y-2">
              <label className="text-[#EFF6FB] text-sm font-medium">Name</label>

              <input
                name="name"
                required
                placeholder="John Doe"
                className="
                  w-full
                  rounded-xl
                  border
                  border-green-500/20
                  bg-[#040C13]
                  px-4
                  py-3
                  text-[#EFF6FB]
                  placeholder:text-[#8E9AA4]
                  outline-none
                  transition
                  focus:border-green-400
                "
              />
            </div>

            {/* Email */}

            <div className="space-y-2">
              <label className="text-[#EFF6FB] text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-green-500/20
                  bg-[#040C13]
                  px-4
                  py-3
                  text-[#EFF6FB]
                  placeholder:text-[#8E9AA4]
                  outline-none
                  transition
                  focus:border-green-400
                "
              />
            </div>

            {/* Password */}

            <div className="space-y-2">
              <label className="text-[#EFF6FB] text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                placeholder="Enter password"
                className="
                  w-full
                  rounded-xl
                  border
                  border-green-500/20
                  bg-[#040C13]
                  px-4
                  py-3
                  text-[#EFF6FB]
                  placeholder:text-[#8E9AA4]
                  outline-none
                  transition
                  focus:border-green-400
                "
              />

              <p className="text-xs text-[#8E9AA4]">
                At least 8 characters, 1 uppercase and 1 number
              </p>
            </div>

            {/* Image */}

            <div className="space-y-2">
              <label className="text-[#EFF6FB] text-sm font-medium">
                Profile Image URL
              </label>

              <input
                name="image"
                required
                placeholder="https://example.com/avatar.jpg"
                className="
                  w-full
                  rounded-xl
                  border
                  border-green-500/20
                  bg-[#040C13]
                  px-4
                  py-3
                  text-[#EFF6FB]
                  placeholder:text-[#8E9AA4]
                  outline-none
                  transition
                  focus:border-green-400
                "
              />
            </div>

            {/* Sign Up Button */}

            <Button
              type="submit"
              className="
                w-full
                bg-green-500
                hover:bg-green-400
                text-black
                font-semibold
                rounded-xl
                py-3
                transition
              "
            >
              Sign Up
            </Button>

            {/* Divider */}

            <div className="relative py-3">
              <div className="border-t border-green-500/20"></div>

              <p
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -top-1
                  bg-[#0a151fdc]
                  px-4
                  text-sm
                  text-[#8E9AA4]
                "
              >
                Or continue with
              </p>
            </div>

            {/* Google */}

            <button
              type="button"
              onClick={handleGoogle}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-green-500/20
                bg-white/5
                py-3
                text-[#EFF6FB]
                transition
                hover:border-green-400
                hover:bg-white/10
                cursor-pointer
              "
            >
              <FaGoogle />
              Continue with Google
            </button>
          </Form>

          {/* Footer */}

          <div className="flex justify-center gap-2 mt-8 text-[#8E9AA4]">
            <span>Already have an account?</span>

            <Link
              href="/signIn"
              className="text-green-400 hover:text-green-300 font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
