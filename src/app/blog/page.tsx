import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const arrDummie = [];
  for (let i = 0; i < 10; i++) arrDummie.push(i);
  return (
    <div className="blogContainer">
      {arrDummie.map((i) => (
        <Link
          href={"/blog/test" + i}
          className="blog items-center gap-12 mb-12 flex"
          key={i}
        >
          <div className="imageContainer ">
            <Image
              src={
                "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80"
              }
              width={900}
              height={250}
              alt="kucing - homie"
              className="img object-cover"
            />
          </div>
          <div className="content">
            <h1 className="title font-bold mb-3 text-3xl">
              Inventore, laborum tempore
            </h1>
            <p className="desc text-lg ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              vero illum, enim nostrum in hic perferendis laboriosam placeat aut
              dignissimos at? Inventore, laborum tempore. Nisi ad voluptatum,
              eligendi numquam asperiores beatae veniam, magnam temporibus illum
              esse quis magni alias aperiam.
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
