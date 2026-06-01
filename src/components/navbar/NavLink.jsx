'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function NavLink({href,children}) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <div>
            <Link href={href}
                className={
                    isActive ?  'px-4 py-2 rounded-xl text-[#51D75E] font-medium bg-[#51D75E]/15' : 'font-medium text-[#8E9AA4]'
                }
            >
                {children}
            </Link>
        </div>
    )
}
