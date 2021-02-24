import React, { useState } from "react";

//let title = "random title";

//hooks starts with use keyword
//hooks must be defined within component body

const FirstConcept = () => {
  const [title, setTitle] = useState("Ms.");
  const [name, setName] = useState("Farhat Parveen");
  const [age, setAge] = useState("18");

  const handleClick = () => {
    //title = "hello world";
    //console.log(title);
    setTitle("Mr. ");
    setName("Salman");
    setAge("20");
  };
  return (
    <>
      {console.log(title)}
      <h2>
        {title} {name} {age}
      </h2>
      <button type="button" onClick={handleClick}>
        Click Me!
      </button>
    </>
  );
};

export default FirstConcept;
