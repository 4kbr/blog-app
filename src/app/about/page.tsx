import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="imgContainer w-full h-80 relative">
        <Image
          className="object-cover grayscale"
          src={
            "https://images.pexels.com/photos/344060/pexels-photo-344060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Child Running - Homie"
          fill
        />
        <div className="imgText absolute bottom-5 left-5 bg-primary p-2 text-white">
          <h1 className="imgTitle">Digital Storymaker</h1>
          <h1 className="imgDesc">Hand drawing award nominee digital EXPO</h1>
        </div>
      </div>
      <div className="textContainer flex gap-28">
        <div className="itemAbout flex-1 mt-12 flex flex-col gap-8">
          <h1 className="title text-2xl font-bold">Who Are We?</h1>
          <p className="desc text-lg font-light text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ullam atque voluptates, veniam quibusdam magnam minus. Nam, ullam
            totam explicabo aliquam unde tenetur corporis quos ab consequuntur
            veritatis placeat natus odio beatae possimus minima similique harum
            ducimus necessitatibus aut. Cumque voluptatum dolore unde laborum
            neque quidem iste ab distinctio quibusdam?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            earum perspiciatis ea tempora quo, autem voluptatum provident,
            aperiam repellat molestias minima deleniti molestiae recusandae
            atque soluta iste rem quaerat aspernatur. Harum numquam, tenetur
            alias hic voluptatum sint fugit ab fugiat.
          </p>
        </div>
        <div className="itemAbout flex-1 mt-12 flex flex-col gap-8">
          <h1 className="title text-2xl font-bold">What We Do?</h1>
          <p className="desc text-lg font-light text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ullam atque voluptates, veniam quibusdam magnam minus. Nam, ullam
            totam explicabo aliquam unde tenetur corporis quos ab consequuntur
            veritatis placeat natus odio beatae possimus minima similique harum
            ducimus
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy Mobile app
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
