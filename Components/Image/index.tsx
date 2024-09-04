import { default as NextImage } from "next/image";
// import Image from "next/image";

const Image = () => {
  return (
    <NextImage
      src={"/pictures/logo.png"}
      alt={"lorem"}
      width={500}
      height={500}
    />
  );
};

export default Image;
