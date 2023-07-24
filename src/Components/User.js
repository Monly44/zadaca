import React from "react";

function User({ user }) {
  return (
    <li>
      {user.id} - {user.ime} {user.prezime}
    </li>
  );
}

export default User;
