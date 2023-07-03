"use client";

import Image from "next/image";
import { useState } from "react";
import "./table.css";

const Table = ({ users, setUserId, setOpenModal, handeleDeleteUser }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="table__container">
      <table>
        <thead>
          <tr className={""}>
            <th>{""}</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <Image
                  alt={user?.firstName}
                  src={user?.image}
                  width={65}
                  height={55}
                />
              </td>
              <td>
                {user?.firstName} {user?.lastName}
              </td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.domain}</td>
              <td>{user?.company?.name}</td>
              <td className="table__actions">
                <Image
                  alt={user?.firstName}
                  onClick={() => {
                    setUserId(user?.id);
                    setOpenModal(true);
                  }}
                  src={"pen.svg"}
                  width={19}
                  height={19}
                />
                <Image
                  alt={user?.firstName}
                  onClick={() => handeleDeleteUser(user?.id)}
                  src={"trash.svg"}
                  width={19}
                  height={19}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
