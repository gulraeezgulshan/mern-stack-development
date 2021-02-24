import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Salman",
    age: 20,
    message: "This is sample Message",
  });

  const handleWholeState = () => {
    setPerson({ name: "Aleem", age: 35, message: "This is message by Aleem" });
  };

  const handleOnlyMessage = () => {
    setPerson({ ...person, message: "This is message by Aleem" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={handleWholeState}>Change Whole State</button>
      <button onClick={handleOnlyMessage}>Change Message State</button>
    </>
  );
};

export default UseStateObject;
