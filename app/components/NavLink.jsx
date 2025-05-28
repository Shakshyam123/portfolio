import Link from "next/link";
import React from "react";

export const NavLink = ({ href, title }) => {
  return (
    <div>
      <Link href={href} className=" py-2 pl-3 pr-4 text-[#ADB7BE]">
        {title}
      </Link>
    </div>
  );
};
