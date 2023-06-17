import Link from "next/link";
import React from "react";

type ButtonParam = {
  text: string;
  url: string;
};
const Button = ({ text, url }: ButtonParam) => {
  return (
    <Link href={url}>
      <button className="button p-5 cursor-pointer bg-primary border-none rounded-md max-w-fit text-white">
        {text}
      </button>
    </Link>
  );
};

export default Button;
