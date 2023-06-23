"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("memanggil");
    // try {
    const res = await signIn("credentials", formState);
    if (res?.error) {
      console.log("pw salah");

      setErr(true);
    } else {
      console.log("oke ");
    }
    console.log(res);
  };

  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "authenticated") {
    return router?.push("/dashboard");
  }

  return (
    <div className="loginContainer flex items-center flex-col gap-5">
      <h1 className={`title text-secondary`}>
        {success ? success : "Welcome Back"}
      </h1>
      <h2 className={`subtitle text-xl mb-[30px] text-secondary`}>
        Please sign in to see the dashboard.
      </h2>
      <form
        className="form w-[300px] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="email"
          name="email"
          className={styles.input}
          value={formState.email}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className={styles.input}
          value={formState.password}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, password: e.target.value }))
          }
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      {/* {err && <p>Something error</p>} */}
      <button
        onClick={() => signIn("google")}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <span className="text-secondary">- OR -</span>
      <Link
        className="link hover:text-[rgb(61,61,61)] underline text-secondary"
        href={"/dashboard/register"}
      >
        Create new account
      </Link>
    </div>
  );
};

export default Login;
