import Link from "next/link";
import ThemeControl from "../../Themes/ThemeControl";

const Navbar = () => {
  return (
    <div className=" mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex justify-between gap-10 items-center max-w-7xl mx-auto p-5 ">
        <div>
          <h2 className="font-medium">Next App</h2>
        </div>
        <div className="flex gap-28 font-mono text-lg text-black dark:text-blue-800">
          <Link className="hover:text-red-900" href="/">Home</Link>
          <Link className="hover:text-red-900" href="/contactUs">Contacts</Link>
          <Link className="hover:text-red-900" href="/about">Abouts</Link>
        </div>
        <div>
          <ThemeControl></ThemeControl>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
