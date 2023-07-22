"use client";
import deleteUser from "@/libs/deleteUser";
import getOneUser from "@/libs/getOneUser";
import getupdateUser from "@/libs/getUpdateUser";
import getUsers from "@/libs/getUsers";
import searchValue from "@/libs/searchValue";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AddUsersFrom from "../Form/AddUsersFrom";
import Table from "./Table";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const StudentsTable = () => {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [total, setTotal] = useState();
  const [limit, setLimit] = useState(searchParams.get("limit"));
  const [skip, setSkip] = useState(searchParams.get("skip"));
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [updated, setUpdated] = useState(searchParams.get("q") || "");

  const fecthUsers = async () => {
    setLoading(true);
    try {
      const users = updated
        ? await searchValue(updated, limit, skip)
        : await getUsers(limit, skip);
      setTotal(users.total);
      setUsers(users.users);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fecthUsers();
  }, [limit, skip, updated]);

  /* edit user */

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = await getupdateUser(member, userId);
      setOpenModal(false);
      setMember(initialvalues);
    } catch (error) {
      alert(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchUserDetail = async () => {
      const data = await getOneUser(userId);
      setMember({
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phone: data?.phone,
        website: data?.domain,
        company: { name: data?.company?.name },
      });
    };
    userId && fetchUserDetail();
  }, [userId]);

  /* edit user */

  /* delete user */

  const handeleDeleteUser = async (id) => {
    const data = await deleteUser(id);
    fecthUsers();
  };
  useEffect(() => {
    const fetchSearchvalue = async () => {
      setLoading(true);
      try {
        const data = await searchValue(updated, limit, skip);
        setTotal(data.total);
        setUsers(data.users);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    (updated || search) && fetchSearchvalue();
  }, [updated]);

  /* delete user */
  return (
    <div>
      <div className={openModal && "dialog__footer"} />
      <TableHeader
        search={search}
        setSearch={setSearch}
        setSkip={setSkip}
        setUpdated={setUpdated}
      />
      <div
        style={{
          display: "flex",
          margin: "10px 30px 0 10px",
          border: "1px #E5E5E5 solid",
        }}
      />
      <div style={{ height: "75vh", overflow: "auto" }}>
        {!loading ? (
          <Table
            users={users}
            setUserId={setUserId}
            setOpenModal={setOpenModal}
            handeleDeleteUser={handeleDeleteUser}
          />
        ) : (
          <div className="loader" />
        )}
      </div>
      <TableFooter
        total={total}
        limit={limit}
        setLimit={setLimit}
        skip={skip}
        setSkip={setSkip}
      />
      <div style={{ position: "absolute", top: "12.5%", left: "45%" }}>
        <AddUsersFrom
          title="Edit Student"
          member={member}
          setMember={setMember}
          submitting={submitting}
          handleSubmit={handleSubmit}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default StudentsTable;
