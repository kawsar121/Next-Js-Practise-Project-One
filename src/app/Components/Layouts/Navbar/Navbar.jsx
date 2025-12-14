import Link from "next/link";
import ThemeControl from "../../Themes/ThemeControl";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-10 items-center  mt-5 max-w-7xl mx-auto mb-10">
        <div>
            <h2 className="">Next App</h2>
        </div>
      <div className="flex gap-20">
        <Link className="bg-white text-black dark:bg-black dark:text-white" href="/">Home</Link>
        <Link href="/contactUs">Contacts</Link>
        <Link href="/about">Abouts</Link>
      </div>
      <div>
        <ThemeControl></ThemeControl>
      </div>
    </div>
  );
};

export default Navbar;
