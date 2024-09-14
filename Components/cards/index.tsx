import { BCard } from "@/app/interfaces";
import Image from "../Image";

const Cardfordb = ({ title, description, img }: BCard) => {
  return (
    <div>
      {/* <img src={img} alt="" /> */}
      <Image src={img} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Cardfordb;
