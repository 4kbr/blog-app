import { fetchPublic } from "@/utils/api_call";
import { IPost } from "@/utils/model_interface";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id: string): Promise<IPost> {
  const res = await fetchPublic(`/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok || res.status > 299) {
    return notFound();
  }
  return res.json();
}

type Props = {
  params: Params;
};
const BlogId = async ({ params }: Props) => {
  const data = await getData(params.id);

  return (
    <div className="blogIdContainer">
      <div className="top flex">
        <div className="info flex-1 flex flex-col justify-between">
          <h1 className="title text-[40px] font-bold">{data.title}</h1>
          <p className="desc text-lg font-light">{data.desc}</p>
          <div className="author flex items-center gap-[10px]">
            <div className="h-10 w-10 relative">
              <Image
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80"
                alt="blog - homie"
                fill
                className="avatar object-cover rounded-[50%]"
              />
            </div>
            <span className="username">{data.username}</span>
          </div>
        </div>
        <div className="imageContainer flex-1 h-[300px] relative">
          <Image
            src={data.image}
            alt="kereta - homie"
            fill
            className="image object-cover"
          />
        </div>
      </div>
      <div className="content mt-[50px] text-xl font-light text-justify">
        <p className="desc">{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
