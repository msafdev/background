import Link from "next/link";

import { FaGithub } from "react-icons/fa6";

import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between py-4 gap-x-6">
      <Image src={Logo} alt="Logo" className="w-10 h-10" />
      <nav className="">
        <Button variant={"default"} size={"sm"}>
          <Link
            className="flex items-center gap-x-2.5"
            href="https://github.com/msafdev/background"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <FaGithub className="w-4 h-4" />
            Star on Github
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
