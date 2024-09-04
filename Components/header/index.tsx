import React from "react";
import { Navbar } from "../navbar";
import HeaderTop from "../HeaderTop";

export const Header = () => {
  return (
    <div>
      <HeaderTop />
      <div className="container  ">
        <Navbar />
      </div>
    </div>
  );
};
