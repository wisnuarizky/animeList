import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/${anime.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            key={anime.mal_id}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
              priority={true}
            />
            <h3 className="md:text-xl text-base font-bold p-4 ">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
