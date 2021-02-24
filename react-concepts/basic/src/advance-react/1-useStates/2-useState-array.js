import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [person, setPerson] = React.useState(data);

  const removeItemHandle = (id) => {
    let removedPerson = person.filter((p) => p.id !== id);
    setPerson(removedPerson);
  };

  const resetHandle = () => {
    setPerson([]);
    setPerson(data);
    //console.log(person);
    //console.log(data);
  };

  return (
    <React.Fragment>
      {person.map((p) => {
        const { id, name } = p;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItemHandle(id)}>remove</button>
          </div>
        );
      })}

      <button onClick={() => setPerson([])}>Clear All</button>
      <button onClick={() => resetHandle()}>Reset</button>
    </React.Fragment>
  );
};

export default UseStateArray;
