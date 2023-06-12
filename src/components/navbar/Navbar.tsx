import Link from "next/link";

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
    <div>
      <Link href={"/"}>Homie</Link>
      <div>
        {links.map((link, i) => (
          <Link href={link.url} key={i}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
