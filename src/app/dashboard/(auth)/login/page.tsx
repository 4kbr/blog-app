"use client";

import { signIn, signOut } from "next-auth/react";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="loginContainer">
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
        {/* <button className="button p-5 cursor-pointer bg-primary border-none rounded-md text-white">
          Register
        </button> */}
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Login;
