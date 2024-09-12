"use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   function LinkWithUnderline();
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(true);
//   };

//   const handleBlur = () => {
//     setIsActive(false);
//   };

//   return (
//     <section className="h-[70vh] flex items-center justify-center bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
//       <div>
//         <div className="flex justify-center bg-white gap-4  py-2 px-20  border  rounded-full picture">
//           <div
//             className={isActive ? "underline" : ""}
//             onMouseOver={handleClick}
//             onMouseLeave={handleBlur}
//           >
//             <Link href="/about">About</Link>
//           </div>
//           <Link
//             className={isActive ? "underline" : ""}
//             onMouseOver={handleClick}
//             onMouseLeave={handleBlur}
//             href="/menue"
//           >
//             Menue
//           </Link>
//           <Link
//             className={isActive ? "underline" : ""}
//             onMouseOver={handleClick}
//             onMouseLeave={handleBlur}
//             href="/beverages"
//           >
//             Beverages
//           </Link>
//           <Link
//             className={isActive ? "underline" : ""}
//             onMouseOver={handleClick}
//             onMouseLeave={handleBlur}
//             href="/delivery"
//           >
//             Delivery
//           </Link>
//           <Link
//             className={isActive ? "underline  " : ""}
//             onMouseOver={handleClick}
//             onMouseLeave={handleBlur}
//             href="/contact"
//           >
//             Contact us
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <section className="h-[70vh] flex items-center justify-center bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
      <div>
        <div className="flex justify-center bg-white gap-4  py-2 px-20  border  rounded-full picture">
          <div
            className={activeLink === "about" ? "rounded-full  bg-green" : ""}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/about">About</Link>
          </div>
          <div
            className={activeLink === "menue" ? "rounded-full bg-green" : ""}
            onMouseEnter={() => handleMouseEnter("menue")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/menue">Menue</Link>
          </div>
          <div
            className={
              activeLink === "beverages" ? "rounded-full bg-green" : ""
            }
            onMouseEnter={() => handleMouseEnter("beverages")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/beverages">Beverages</Link>
          </div>
          <div
            className={activeLink === "delivery" ? "rounded-full bg-green" : ""}
            onMouseEnter={() => handleMouseEnter("delivery")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/delivery">Delivery</Link>
          </div>
          <div
            className={activeLink === "contact" ? "rounded-full bg-green" : ""}
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

// abi sualim:  yuxarda commente aldiqim funksiyada ne sehvdirki mouse ile hover edende hamsinin altindan xett cekir
// awaqida yazdiqim code blokun aciqi black-boxda mene hazir verdi ama bawa duwe bilmedim yolunu
