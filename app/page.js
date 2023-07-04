"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  let user;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const userInfo = localStorage.getItem("user");
    user = JSON.parse(userInfo);
  }

  useEffect(() => {
    if (!user) {
      router.push("login");
    } else {
      router.push("/home");
    }
  }, []);
  return <main></main>;
}
