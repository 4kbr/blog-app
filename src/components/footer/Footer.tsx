import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer h-12 flex items-center justify-between">
      <div> &#169; ME. All rights reserved.</div>
      <div className="logos flex gap-3 items-center">
        <Image
          className="icon"
          alt="Homie Facebook"
          src={"/1.png"}
          width={15}
          height={15}
        />
        <Image
          className="icon"
          alt="Homie Instagram"
          src={"/2.png"}
          width={15}
          height={15}
        />
        <Image
          className="icon"
          alt="Homie Twitter"
          src={"/3.png"}
          width={15}
          height={15}
        />
        <Image
          className="icon"
          alt="Homie Youtube"
          src={"/4.png"}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
