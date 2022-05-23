import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center p-16">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        objectFit="contain"
        width={400}
        height={400}
      />
      <h1
        className="p-5 bg-blue-500 text-white rounded-full 
      mt-16 cursor-pointer hover:bg-black active:shadow-md"
        onClick={signIn}
      >
        Login with facebook
      </h1>
    </div>
  );
};

export default Login;
