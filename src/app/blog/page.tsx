import { fetchPublic } from "@/utils/api_call";
import { IPost } from "@/utils/model_interface";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetchPublic("/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data: [] = await getData();

  return (
    <div className="blogContainer">
      {data.map((i: IPost) => (
        <Link
          href={"/blog/" + i._id}
          className="blog items-center gap-[50px] mb-[50px] flex"
          key={i._id}
        >
          <div
            className="imageContainer relative 
              h-[250px] w-[400px]"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80"
              }
              fill
              alt="kucing - homie"
              className="img object-cover"
            />
          </div>
          <div className="content flex-1 ">
            <h1 className="title font-bold mb-3 text-3xl">{i.title}</h1>
            <p className="desc text-lg ">{i.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
