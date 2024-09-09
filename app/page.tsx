"use client";
import Cardfordb from "@/Components/Cards";
import { useState, useEffect } from "react";
import { BCard } from "./interfaces";
import axios from "axios";

const url = `${process.env.VITE_BASE_URL}/menue`;

const Home = () => {
  const [menue, setMenue] = useState<BCard[] | []>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setMenue(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center py-5  size-30 font-bold ">BBQ&Kebab</h1>

        <div className="font-light ">
          <p className="text-center container py-5 ">
            Barbecue in Kansas City is more than a menu item or a method of
            preparation. It’s an institution, rich with history and culinary
            tradition that shapes the city’s dining landscape every day and has
            since the early 1900s.
          </p>
          <p className="text-center container py-5">
            To follow the heritage, we embrace the tradition keeping the concept
            of ultimate comfort food and remain a part of something timeless
            with our “Kebab” Middle Eastern style of BBQ.
          </p>

          <p className="text-center container py-5">
            We use only low fat quality 100% American beef and lamb. Our smiles
            and laughter demonstrate confidence in our product and service. Our
            portions are rich and our service system is one of the easiest,
            quick serve kebab outlets in the country
          </p>
        </div>
      </div>

      {menue.map((obj: BCard) => (
        <Cardfordb
          key={obj.id}
          id={obj.id}
          img={obj.img}
          title={obj.title}
          description={obj.description}
        />
      ))}
    </>
  );
};

export default Home;
