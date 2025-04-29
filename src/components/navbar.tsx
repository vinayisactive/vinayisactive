"use client"
import { NavbarProps } from "@/interface/interfaces";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavAction({ text, type, href, icon }: NavbarProps) {
  const pathname = usePathname();
  const isActive = type=== "route" && pathname === `/${href}` || (pathname === "/" && href === "/")
  const hyperRef = type === "link" ? href : `/${href}`
  const linkTarget = type==="link" ? "_blank" : "_self"

  return (
    <Link
      href={hyperRef}
      target={linkTarget}
      className={`text-sm flex items-center gap-1 underline-offset-2 ${ 
        isActive 
            ? "underline text-black" 
            : "hover:underline text-gray-500"
          }`}
    >
      {text} {icon && <ArrowUpRight size={15} className="pt-0.5" />}
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="w-full py-12 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <NavAction 
          text="home" 
          type="route" 
          href="/" 
          />

        <NavAction 
          text="articles" 
          type="route" 
          href="articles" 
          />
      </div>

      <div className="flex gap-4 items-center">
        <NavAction
          text="twitter"
          type="link"
          href="https://x.com/vinayisactive"
        />

        <NavAction
          text="github"
          type="link"
          href="https://github.com/vinayisactive"
          icon
        />
      </div>
    </nav>
  );
}

export default Navbar;
