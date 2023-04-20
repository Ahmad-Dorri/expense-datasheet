import Card from "./../UI/Card";
import styles from "./AddUser.module.css";
import Button from "./../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const changeUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "invalid inputs age and name (empty-inputs)",
      });
      return;
    }
    if (+age <= 0) {
      setError({
        title: "invalid age",
        message: "invalid age please enter age greater than 0",
      });
      return;
    }
    const data = {
      username: userName,
      age: age,
      id: Math.random().toString(),
    };
    props.onSaveData(data);
    setUserName("");
    setAge("");
  };
  const closeHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={closeHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">userName: </label>
          <input
            value={userName}
            onChange={changeUserNameHandler}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age: </label>
          <input
            value={age}
            onChange={changeAgeHandler}
            type="number"
            id="age"
          />
          <Button type="submit">add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
