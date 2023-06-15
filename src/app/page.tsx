import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div>
      <Image
        width={500}
        height={500}
        src={Hero}
        alt="Hero Homie"
        className=""
      />
    </div>
  );
}
