'use client'
import { signOut, useSession } from "@/lib/auth-client"
import {Avatar} from "@heroui/react";
import Link from "next/link"

const NavUser = () => {
  const {data, isPending} = useSession()
  const user = data?.user;
  if(isPending){
    return <span className="loading loading-ring loading-lg"></span>
  }
  return (
    <div>
      {user ? 
        <>
          <div className="flex gap-4 items-center">
            <h2 className="text-[#EFF6FB] font-medium">
                Welcome, <span className="text-[#51D75E]">{user?.name}</span> 
            </h2>
            <Avatar>
              <Avatar.Image alt="John Doe" src={user?.image}  referrerPolicy="no-referrer"/>
              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
            <button className="px-4 py-2 rounded-lg border border-red-500/40 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition" onClick={() => signOut()}>Sign Out</button>
          </div>
        </> :
        <>
          <div className="flex items-center gap-5">
            <Link 
                href="/signIn" 
                className="text-[#EFF6FB]/80 hover:text-[#EFF6FB] transition-colors text-[15px] font-medium"
              >
                Login
            </Link>

            <Link
                href="/signUp"
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition cursor-pointer"
              >
                Get Started
            </Link>
          </div>
        </>
      }
    </div>
  )
}

export default NavUser