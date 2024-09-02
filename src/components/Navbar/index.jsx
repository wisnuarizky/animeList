import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex justify-between md:items-center p-4 flex-col gap-2 md:flex-row">
        <Link href="/" className="font-bold text-white text-2xl">
          CUYANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
