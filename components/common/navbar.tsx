import Link from "next/link";

import { FaGithub, FaTwitter } from "react-icons/fa6";
import { Layers3 } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between py-6 gap-x-6">
      <div className="w-10 h-10 text-white bg-gradient-to-b from-indigo-400 to-indigo-600 p-2.5 flex items-center justify-center rounded-xl">
        <Layers3 />
      </div>
      <nav className="grid grid-cols-2 gap-2 bg-muted/50 backdrop-blur-sm border p-2 rounded-2xl">
        <Link
          className="text-white p-2 rounded-xl rounded-br group transition-all duration-200 ease-in-out hover:bg-zinc-800 bg-black"
          href="https://github.com/msafdev/bg-snippets"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-100 scale-90 transition-all duration-200 ease-in-out" />
        </Link>
        <Link
          className="text-white p-2 rounded-xl rounded-bl group transition-all duration-200 ease-in-out hover:bg-blue-400 bg-blue-500"
          href="https://twitter.com/msafdev"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-100 scale-90 transition-all duration-200 ease-in-out" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
