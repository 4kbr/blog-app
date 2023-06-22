"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  type Props = {
    data: [];
    err: boolean;
    isLoading: boolean;
  };

  const session = useSession();

  console.log("session");
  console.log(session);

  //TODO: new Way
  const fecther = (args: string) => fetch(args).then((res) => res.json());

  const { data, error } = useSWR<[], Error>(
    "https://jsonplaceholder.typicode.com/posts",
    fecther
  );

  console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;
