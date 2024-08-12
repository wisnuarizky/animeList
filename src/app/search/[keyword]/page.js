import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* anime populer */}
      <section>
        <Header title={`Pencarian Untuk "${keyword}"`} />
        <AnimeList api={searchAnime} />
      </section>
      {/*  */}
    </>
  );
};

export default Page;
