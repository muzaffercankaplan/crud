"use client";
import { createContext, useContext, useState } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  let user;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const userInfo = localStorage.getItem("user");
    user = JSON.parse(userInfo);
  }
  const [profil, setProfile] = useState(user);
  const [closeSidebar, setcloseSidebar] = useState(false);
  const values = {
    closeSidebar,
    setcloseSidebar,
    profil,
    setProfile,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
const useMainContext = () => useContext(MainContext);
export { MainProvider, useMainContext };
