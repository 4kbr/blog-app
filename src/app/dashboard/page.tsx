"use client";
import { IPost } from "@/utils/model_interface";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";
import { headers } from "next/dist/client/components/headers";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [formState, setFormState] = useState({
    title: "",
    desc: "",
    image: "",
    content: "",
  });

  //TODO: new Way
  const fecther = (args: string) => fetch(args).then((res) => res.json());
  const { error, isLoading, data, mutate } = useSWR<[IPost], Error>(
    `/api/posts?username=${session.data?.user?.name}`,
    fecther
  );

  console.log("data: ");
  console.log(data);

  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "unauthenticated") {
    return router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("ini user.name");
      console.log(session.data.user);

      try {
        await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            ...formState,
            username: session.data.user?.name,
          }),
        });
        setFormState({ title: "", content: "", desc: "", image: "" });
        mutate();
      } catch (error) {
        console.log(error);
      }
    };

    const handleDelete = async (id: string) => {
      try {
        await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });
        mutate();
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div className="dashContainer flex gap-[100px]">
        <div className="posts flex-1">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((post) => (
              <div
                className="post flex items-center justify-between my-[50px] mx-[0]"
                key={post._id}
              >
                <div className="imgContainer w-52 h-[100px] relative">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="postTitle text-center ">
                  {post.title.length > 20
                    ? post.title.slice(0, 20) + "..."
                    : post.title}
                </h2>
                <span
                  className="delete cursor-pointer text-red-500"
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))
          )}
        </div>
        <form
          className="new flex-1 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, title: e.target.value }))
            }
            value={formState.title}
          />
          <input
            type="text"
            placeholder="Desc"
            className={styles.input}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, desc: e.target.value }))
            }
            value={formState.desc}
          />
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, image: e.target.value }))
            }
            value={formState.image}
          />
          <textarea
            name="content"
            cols={30}
            rows={10}
            placeholder="Content"
            className={styles.textArea}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, content: e.target.value }))
            }
            value={formState.content}
          ></textarea>
          <button className="p-5 cursor-pointer bg-primary border-none rounded-md text-white">
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
