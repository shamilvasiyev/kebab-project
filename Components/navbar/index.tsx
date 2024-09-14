import Link from "next/link";

const Navbar = () => {
  return (
    <section className="h-[70vh] flex items-center justify-center bg-[url(/pictures/bcfoto.png)] bg-no-repeat bg-cover">
      <div>
        <div className="flex justify-center bg-white gap-4  py-2 px-20  border  rounded-full picture">
          <Link className={"hover:underline"} href="/about">
            About
          </Link>
          <Link className={"hover:underline"} href="/menue">
            Menue
          </Link>
          <Link className={"hover:underline"} href="/beverages">
            Beverages
          </Link>
          <Link className={"hover:underline"} href="/delivery">
            Delivery
          </Link>
          <Link className={"hover:underline"} href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
