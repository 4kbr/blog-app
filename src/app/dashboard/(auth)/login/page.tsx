"use client";

import { signIn, signOut } from "next-auth/react";

const Login = () => {
  return (
    <div className="loginContainer">
      <button onClick={() => signIn("google")}>Login with Google</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Login;
