import Button from "@/components/Button/Button";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="homeContainer flex items-center gap-24 ">
      <div className="itemHome">
        <h1
          className="title text-6xl font-bold bg-gradient-to-b from-primary 
        to-green-100 bg-clip-text text-transparent"
        >
          Better design for your modern product.
        </h1>
        <p className="desc text-2xl font-light">
          Make a Idea become App. We bring together the teams from the global
          tech industry
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>

      <div className="itemHome object-contain">
        <Image
          width={500}
          height={500}
          src={Hero}
          alt="Hero Homie"
          className="imgMove w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}
