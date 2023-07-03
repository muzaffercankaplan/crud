"use client";

import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import { useMainContext } from "@/context/MainContext";
import "@/styles/global.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const { profil } = useMainContext();
  useEffect(() => {
    if (!profil) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="root__layout">
      <SideBar />
      <div style={{ width: "100%", backgroundColor: "#F8F8F8" }}>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
