import { default as NextImage } from "next/image";
// import Image from "next/image";

const Image = ({ src, alt = "image" }) => {
  return <NextImage src={src} alt={alt} width={500} height={500} />;
};

export default Image;
