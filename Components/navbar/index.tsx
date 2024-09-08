import React from "react";

import Link from "next/link";
export const Navbar = () => {
  return (
    <section className="h-[70vh] flex items-center justify-center bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
      <div className="flex justify-center bg-white gap-4  py-2 px-20  border  rounded-full picture">
        <Link href="/about"> About</Link>
        <Link href="/menue">Menue</Link>
        <Link href="/beverages">Beverages</Link>
        <Link href="/delivery">Delivery</Link>
        <Link href="/contact">Contact us</Link>
      </div>
    </section>
  );
};
