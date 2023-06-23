"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const Register = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setErr(false);
    event.preventDefault();
    console.log("name is");
    // try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    //TODO:nanti bagusin
    if (res.status >= 400) {
      setErr(true);
      return;
    }
    res.status === 201 &&
      router.push("/dashboard/login?success=Account has been created");
    return;
  };

  return (
    <div className="registerContainer flex flex-col gap-5 items-center justify-center">
      <form
        className="form w-[300px] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          className={styles.input}
          value={formState.name}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
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
        <button className="button p-5 cursor-pointer bg-primary border-none rounded-md text-white">
          Register
        </button>
      </form>
      {err && <p>Something went wrong!</p>}
      <Link href={"/dashboard/login"}>Login with an existing account</Link>
    </div>
  );
};

export default Register;
