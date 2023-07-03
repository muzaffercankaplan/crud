"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);
  if (!user) {
    router.push("login");
  } else {
    router.push("/home");
  }

  return <main></main>;
}
