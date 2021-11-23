import Link from "next/link";
import React from "react";
import { AppLinks } from "../../store/links";
import IconFlatMX from "../IconFlatMX";
import NavbarLink from "./Link";

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 px-6 py-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/branches">
          <a href="/branches"> 
            <IconFlatMX />
          </a>
        </Link>
        <span className="font-semibold text-xl text-ruby-300 ml-2">TEST</span>
      </div>
      <div className="flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          {AppLinks.map((link, index)=>{
            return (
              <NavbarLink key={index} title={link.title} href={link.href} />
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;