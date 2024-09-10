"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <section className="h-[70vh] flex items-center justify-center bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
      <div>
        <div className="flex justify-center bg-white gap-4  py-2 px-20  border  rounded-full picture">
          <Link
            className={isActive ? "underline" : ""}
            onMouseOver={handleClick}
            onMouseLeave={handleBlur}
            href="/about"
          >
            About
          </Link>
          <Link
            className={isActive ? "underline" : ""}
            onMouseOver={handleClick}
            onMouseLeave={handleBlur}
            href="/menue"
          >
            Menue
          </Link>
          <Link
            className={isActive ? "underline" : ""}
            onMouseOver={handleClick}
            onMouseLeave={handleBlur}
            href="/beverages"
          >
            Beverages
          </Link>
          <Link
            className={isActive ? "underline" : ""}
            onMouseOver={handleClick}
            onMouseLeave={handleBlur}
            href="/delivery"
          >
            Delivery
          </Link>
          <Link
            className={isActive ? "underline  " : ""}
            onMouseOver={handleClick}
            onMouseLeave={handleBlur}
            href="/contact"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
