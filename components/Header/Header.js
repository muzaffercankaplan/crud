"use client";

import { useMainContext } from "@/context/MainContext";
import Image from "next/image";
import "./header.css";
const Header = () => {
  const { closeSidebar, setcloseSidebar } = useMainContext();
  return (
    <div className="header__container">
      <div
        className={
          closeSidebar ? "header__left_arrow_close" : "header__left_arrow_open"
        }
        onClick={() => setcloseSidebar((prev) => !prev)}
      >
        <Image
          loading="lazy"
          alt="arrow"
          src={"header/left_arrow.svg"}
          width={20}
          height={20}
        />
      </div>
      <div>
        <Image
          loading="lazy"
          alt="arrow"
          src={"header/notion.svg"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Header;
