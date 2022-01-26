import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Signin() {
  return (
    <div className="grid place-items-center justify-center mt-14">
      <Image
        src="/fb.png"
        height={300}
        width={300}
        alt="fb_avatar"
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="mt-14 p-5 bg-blue-500 text-white cursor-pointer rounded-full text-center"
      >
        Login With Facebook
      </h1>
    </div>
  );
}
