import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([
    { username: "ahmad", age: "21", id: "1" },
  ]);
  const saveDataHandler = (data) => {
    setUsers((prev) => [...prev, data]);
  };
  return (
    <div className="app">
      <AddUser onSaveData={saveDataHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
