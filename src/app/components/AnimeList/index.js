import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="..." width={350} height={350} />
      <h3 className="md:text-xl text-base font-bold p-4">{title}</h3>
    </Link>
  );
};

export default AnimeList;
