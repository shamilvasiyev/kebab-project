import Link from "next/link";
import Image from "../Image";

const HeaderTop = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="max-w-[200px]">
          <Image src={""} alt="" />
        </Link>

        <button className="py-2 px-8 border rounded-full shadow-grey shadow-lg">
          +1 (816) 482 1513
        </button>
      </div>

      <h1 className=" text-center text-black text-6xl py-5 font-bold">
        Taste the Original <span className="text-green">KEBAB</span>
      </h1>
    </div>
  );
};

export default HeaderTop;
