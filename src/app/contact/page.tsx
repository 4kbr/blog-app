import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Let&apos;s Keep In Touch</h1>
      <div className="contentContact">
        <Image alt="" src={"/contact.png"} fill />
      </div>
    </div>
  );
};

export default Contact;
