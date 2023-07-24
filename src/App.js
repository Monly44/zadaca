import React, { useState } from "react";
import User from "./Components/User";
import UserForm from "./Components/UserForm";
import UserCount from "./Components/UserCount";
import { UserContext } from "./UserContext";
import "./App.css";

const initialUsers = [
  { id: 1, ime: "Filip", prezime: "Jukić" },
  { id: 2, ime: "Marina", prezime: "Bebek" },
  { id: 3, ime: "Tomislav", prezime: "Rakocija" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  return (
    <div className="Popis">
      <h1>Popis korisnika</h1>
      <UserContext.Provider value={{ users, setUsers }}>
        <UserForm />
        <ul className="ListaImena">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
        <UserCount />
      </UserContext.Provider>
    </div>
  );
}

export default App;
