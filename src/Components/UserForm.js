import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import "./UserForm.css";

function UserForm() {
  const { setUsers } = useContext(UserContext);
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ime.trim() === "" || prezime.trim() === "") return;
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ime: ime, prezime: prezime },
    ]);
    setIme("");
    setPrezime("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <input
          placeholder="Ime"
          className="input-field"
          type="text"
          id="ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          placeholder="Prezime"
          className="input-field"
          type="text"
          id="prezime"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />
      </div>
      <button type="submit">Dodaj korisnika</button>
    </form>
  );
}

export default UserForm;
