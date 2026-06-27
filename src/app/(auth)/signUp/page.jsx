"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { Space_Grotesk } from "next/font/google";
import { Bounce, toast, ToastContainer } from "react-toastify";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    });

    if (error) {
      toast.error("Sign up failed", {
        position: "top-center",
        autoClose: 1500,
        transition: Bounce,
      });
    } else {
      toast.success("Account created successfully", {
        position: "top-center",
        autoClose: 1500,
        transition: Bounce,

        onClose: () => {
          router.push("/signin");
        },
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

        <div className="bg-[#0a151fdc] backdrop-blur-md border border-green-500/20 rounded-3xl p-8 shadow-2xl">
          {/* Heading */}

          <div className="text-center mb-8">
            <h1
              className={`${spaceGrotesk.className} text-4xl font-bold text-[#EFF6FB]`}
            >
              Sport
              <span className="text-green-400">Nest</span>
            </h1>

            <p className="text-[#8E9AA4] mt-3">
              Create your account and start booking facilities
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            {/* Name */}

            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }

                return null;
              }}
            >
              <Label className="text-[#EFF6FB]">Name</Label>

              <Input
                placeholder="John Doe"
                classNames={{
                  input: "text-white",

                  inputWrapper:
                    "bg-[#040C13] border border-green-500/20 hover:border-green-400",
                }}
              />

              <FieldError />
            </TextField>

            {/* Email */}

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-[#EFF6FB]">Email</Label>

              <Input
                placeholder="john@example.com"
                classNames={{
                  input: "text-white",

                  inputWrapper:
                    "bg-[#040C13] border border-green-500/20 hover:border-green-400",
                }}
              />

              <FieldError />
            </TextField>

            {/* Password */}

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain one number";
                }

                return null;
              }}
            >
              <Label className="text-[#EFF6FB]">Password</Label>

              <Input
                placeholder="Enter password"
                classNames={{
                  input: "text-white",

                  inputWrapper:
                    "bg-[#040C13] border border-green-500/20 hover:border-green-400",
                }}
              />

              <Description className="text-[#8E9AA4]">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            {/* Image */}

            <TextField isRequired name="image" type="text">
              <Label className="text-[#EFF6FB]">Profile Image</Label>

              <Input
                placeholder="https://..."
                classNames={{
                  input: "text-white",

                  inputWrapper:
                    "bg-[#040C13] border border-green-500/20 hover:border-green-400",
                }}
              />

              <FieldError />
            </TextField>

            {/* Button */}

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

            <div className="relative py-2">
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
              flex
              items-center
              justify-center
              gap-3
              w-full
              py-3
              rounded-xl
              border
              border-green-500/20
              bg-white/5
              text-[#EFF6FB]
              hover:bg-white/10
              hover:border-green-400
              transition
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
