"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <section className="h-[70vh] flex items-center justify-center bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
      <div>
        <div className="flex justify-center bg-white gap-4  py-2 px-20  border  rounded-full picture">
          <div>
            {" "}
            <Link
              onMouseMove={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{ border: isHovered ? "1px solid green " : "none" }}
              href="/about"
            >
              About
            </Link>
          </div>
          <Link href="/menue">Menue</Link>
          <Link href="/beverages">Beverages</Link>
          <Link href="/delivery">Delivery</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
};
