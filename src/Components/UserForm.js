import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import "./UserForm.css";

function UserForm() {
  const { setUsers } = useContext(UserContext);
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ime.trim() === "" || prezime.trim() === "") {
      setError("Molimo unesite ime i prezime korisnika.");
      return;
    }

    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ime: ime, prezime: prezime },
    ]);
    setIme("");
    setPrezime("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="ime">Ime:</label>
        <input
          className="input-field"
          type="text"
          id="ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="prezime">Prezime:</label>
        <input
          className="input-field"
          type="text"
          id="prezime"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />
      </div>
      <button type="submit">Dodaj korisnika</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default UserForm;
