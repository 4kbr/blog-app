import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";

const Category = ({ params }: { params: any }) => {
  return (
    <div className="catContainer">
      <h1 className="catTitle text-primary ">{params.category}</h1>
      <div className={`${styles.item} flex gap-12 mt-12 mb-24`}>
        <div className="content flex-1 flex flex-col gap-5 justify-center">
          <h1 className="title">Lorem ipsum</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            qui reprehenderit molestias? Minus inventore enim consequuntur eius
            reiciendis tenetur! Cupiditate voluptatum cumque, ab vel neque modi
            labore? Recusandae, aspernatur obcaecati!
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className="imgContainer h-[500px] relative flex-1">
          <Image
            className="object-cover"
            fill
            src={
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
            alt="Journey - Homie"
          />
        </div>
      </div>
      <div className={`${styles.item} flex gap-12 mt-12 mb-24`}>
        <div className="content flex-1 flex flex-col gap-5 justify-center">
          <h1 className="title">Lorem ipsum</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            qui reprehenderit molestias? Minus inventore enim consequuntur eius
            reiciendis tenetur! Cupiditate voluptatum cumque, ab vel neque modi
            labore? Recusandae, aspernatur obcaecati!
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className="imgContainer h-[500px] relative flex-1">
          <Image
            className="object-cover"
            fill
            src={
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
            alt="Journey - Homie"
          />
        </div>
      </div>
      <div className={`${styles.item} flex gap-12 mt-12 mb-24`}>
        <div className="content flex-1 flex flex-col gap-5 justify-center">
          <h1 className="title">Lorem ipsum</h1>
          <p className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta cum
            voluptates sint magnam tempora eum nostrum laborum iusto deleniti!
            Quas laboriosam architecto tempora praesentium sequi voluptas magnam
            cupiditate explicabo doloribus.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className="imgContainer h-[500px] relative flex-1">
          <Image
            className="object-cover"
            fill
            src={
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
            alt="Journey - Homie"
          />
        </div>
      </div>
      <div className={`${styles.item} flex gap-12 mt-12 mb-24`}>
        <div className="content flex-1 flex flex-col gap-5 justify-center">
          <h1 className="title">Lorem ipsum</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            qui reprehenderit molestias? Minus inventore enim consequuntur eius
            reiciendis tenetur! Cupiditate voluptatum cumque, ab vel neque modi
            labore? Recusandae, aspernatur obcaecati!
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className="imgContainer h-[500px] relative flex-1">
          <Image
            className="object-cover"
            fill
            src={
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
            alt="Journey - Homie"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
