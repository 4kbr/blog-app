import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="selectTitle my-5 mx-0">Choose a gallery</h1>
      <div className="items flex gap-14">
        <Link href={"/portfolio/illustrations"} className={`${styles.item}`}>
          <Image
            src={"/illustration.png"}
            alt="illustration - homie"
            fill
            className="object-cover"
          />
          <div className={styles.layer}></div>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href={"/portfolio/websites"} className={`${styles.item}`}>
          <Image
            src={"/websites.jpg"}
            alt="illustration - homie"
            fill
            className="object-cover"
          />
          <div className={styles.layer}></div>
          <span className={styles.title}>Website</span>
        </Link>
        <Link href={"/portfolio/applications"} className={`${styles.item}`}>
          <Image
            src={"/apps.jpg"}
            alt="illustration - homie"
            fill
            className="object-cover"
          />
          <div className={styles.layer}></div>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
