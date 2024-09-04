import { BCard } from "@/app/interfaces";
import "./db.css";

const Cardfordb = ({ title, description, img }: BCard) => {
  return (
    <div className="container db ">
      <img src={img} alt="" />
      <p className="">{title}</p>
      <p className="colorred">{description}</p>
    </div>
  );
};

export default Cardfordb;
