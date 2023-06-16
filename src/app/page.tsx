import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="homeContainer flex items-center gap-24">
      <div className="itemHome">
        <h1 className="title text-7xl font-bold bg-gradient-to-b from-primary to-green-100 bg-clip-text text-transparent">
          Better design for your modern product.
        </h1>
        <p className="desc">
          Make a Idea become App. We bring together the teams from the global
          tech industry
        </p>
        <button className="button">See Our Works</button>
      </div>

      <div className="itemHome ">
        <Image
          width={500}
          height={500}
          src={Hero}
          alt="Hero Homie"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}
