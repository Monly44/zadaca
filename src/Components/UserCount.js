import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import "./UserCount.css"; // Dodajte CSS datoteku sa stilovima

function UserCount() {
  const { users } = useContext(UserContext);

  return <p className="UserCount">Trenutni broj korisnika: {users.length}</p>;
}

export default UserCount;
