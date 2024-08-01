import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex justify-between p-4 flex-col gap-2 md:flex-row">
        <Link href="/" className="font-bold text-white text-2xl">
          CUYANIMELIST
        </Link>
        <input placeholder="cari anime...." className="" />
      </div>
    </header>
  );
};

export default Navbar;
