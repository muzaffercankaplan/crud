"use client";
import getAddUser from "@/libs/getAddUser";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import AddUsersFrom from "../Form/AddUsersFrom";
import "./tableHeader.css";

const TableHeader = ({ search, setSearch, updated, setUpdated }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialvalues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    company: { name: "" },
  };
  const [member, setMember] = useState(initialvalues);
  const [submitting, setSubmitting] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = await getAddUser(member);
      setOpenModal(false);
      setMember(initialvalues);
    } catch (error) {
      alert(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      router.push(
        pathname + "?" + `${search ? createQueryString("q", search) : ""}`
      );
      setUpdated(search);
    }
  };

  return (
    <div className="tableHeader__container">
      <p className="tableHeader__title">Students List</p>
      <div className={openModal && "dialog__footer"} />
      <div className="tableHeader__subContainer">
        <input
          type="text"
          id="message"
          name="message"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
        />
        <button onClick={() => setOpenModal(!openModal)}>
          ADD NEW STUDENT
        </button>
      </div>
      <AddUsersFrom
        title="Add Student"
        member={member}
        setMember={setMember}
        submitting={submitting}
        handleSubmit={handleSubmit}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </div>
  );
};

export default TableHeader;
