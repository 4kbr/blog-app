"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  console.log("session");
  console.log(session);

  //TODO: new Way
  const fecther = (args: string) => fetch(args).then((res) => res.json());

  const { data, error, isLoading } = useSWR<[], Error>(
    "https://jsonplaceholder.typicode.com/posts",
    fecther
  );

  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "unauthenticated") {
    return router?.push("/dashboard/login");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
