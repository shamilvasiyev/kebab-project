import { BCard } from "@/app/interfaces";

const Cardfordb = ({ title, description, img }: BCard) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Cardfordb;
