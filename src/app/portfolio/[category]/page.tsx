import Button from "@/components/Button/Button";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data";
import styles from "./page.module.css";

const getData = (catId: "applications" | "illustrations" | "websites") => {
  const data = items[catId];

  if (data) return data;
  return notFound();
};
type Propss = {
  params: Params;
};
const Category = ({ params }: Propss) => {
  const data = getData(params.category);

  return (
    <div className="catContainer">
      <h1 className="catTitle text-primary ">{params.category}</h1>
      {data.map((i) => (
        <div className={`${styles.item} flex gap-12 mt-12 mb-24`} key={i.id}>
          <div className="content flex-1 flex flex-col gap-5 justify-center">
            <h1 className="title text-5xl font-bold">{i.title}</h1>
            <p className="desc text-xl">{i.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="imgContainer h-[500px] relative flex-1">
            <Image
              className="object-cover"
              fill
              src={i.image}
              alt="Journey - Homie"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
