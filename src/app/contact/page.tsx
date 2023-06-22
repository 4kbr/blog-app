import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "@/app/contact/page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Homie",
  description: "Contact us for your amazing product",
};

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title text-6xl mb-24 text-center font-bold">
        Let&apos;s Keep In Touch
      </h1>
      <div className="contentContact flex items-center gap-24">
        <div className="imgContainer relative flex-1 h-[500px]">
          <Image
            alt=""
            src={"/contact.png"}
            fill
            className="object-contain imgMove"
          />
        </div>

        <form action="formContact" className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            className={styles.inputContact}
          />
          <input
            type="text"
            placeholder="email"
            className={styles.inputContact}
          />
          <textarea
            className={styles.textAreaContact}
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="message"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
