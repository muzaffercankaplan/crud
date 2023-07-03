"use client";

import { useMainContext } from "@/context/MainContext";
import { sideBarModel } from "@/data/sideBarModel/sideBarModel";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./sideBar.css";

const SideBar = () => {
  const { closeSidebar, profil, setProfile } = useMainContext();

  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("user");
    setProfile();
    router.push("login");
  };

  const pathName = usePathname();
  const userName = profil?.email?.split("@")[0];
  return (
    <div>
      {!closeSidebar ? (
        <div className="sidebar__container">
          <div className="title">manage courses</div>
          <Image
            className="image"
            loading="lazy"
            width={128}
            height={128}
            src="avatar.svg"
            alt="avatar"
          />
          <p className="user_name">{userName}</p>
          <p className="user_role">Admin</p>
          <div className="linkContainer">
            {sideBarModel.map(({ title, href, icon }) => (
              <Link
                className={pathName == href && "linkContainerActive"}
                // { pathname: "/about", query: { name: "leangchhean" } }
                href={
                  href === "/students"
                    ? { pathname: href, query: { limit: 6, skip: 0 } }
                    : href
                }
                key={title}
              >
                <Image alt={title} src={icon} height={20} width={20} />
                <p>{title}</p>
              </Link>
            ))}{" "}
          </div>
          <p onClick={logout} className="sidebar__logout">
            Logout{" "}
            <Image
              alt="logout"
              src="/sidebar/Logout.svg"
              height={20}
              width={20}
            />
          </p>
        </div>
      ) : (
        <div className="sidebar__container_close">
          <div className="sidebar__image_close">
            <Image
              className="image"
              loading="lazy"
              width={30}
              height={30}
              src="avatar.svg"
              alt="avatar"
            />
          </div>
          <div className="linkContainer_close">
            {sideBarModel.map(({ title, href, icon }) => (
              <Link
                className={pathName == href && "linkContainerActive_close"}
                href={href}
                key={title}
              >
                <Image alt={title} src={icon} height={20} width={20} />
              </Link>
            ))}
          </div>
          <p onClick={logout} className="sidebar__logout">
            <Image
              alt="logout"
              src="/sidebar/Logout.svg"
              height={20}
              width={20}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default SideBar;
