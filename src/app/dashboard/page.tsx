"use client";
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

  //TODO:old way
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       // next: { revalidate: 10 }, *for fetch new data every ...second
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     const resJson: [] = await res.json();
  //     setData(resJson);
  //     setIsLoading(false);
  //   };

  //   getData();
  // }, []);

  //TODO: new Way
  // const fecther = (...args: []) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR<[], Error>(
    "https://jsonplaceholder.typicode.com/posts",
    (args: string) => fetch(args).then((res) => res.json())
  );

  console.log(data);

  // useSWR(() => '/api/user', key => {})

  return <div>Dashboard</div>;
};

export default Dashboard;
