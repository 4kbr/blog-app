"use client";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="h-28 flex justify-between items-center">
      <Link href={"/"} className="logo font-bold text-2xl">
        Homie
      </Link>
      <div className="links md:flex items-center gap-5 hidden ">
        <DarkModeToggle />
        {links.map((link, i) => (
          <Link href={link.url} key={i} className="link ">
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => console.log("Logeed out")}
          className="logout p-2 border-none bg-primary"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
