import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  //useState hook
  const [value, setValue] = useState(0);
  let static_value = 5;

  //useEffect hook

  //It will called after initial render and every re-render
  //It has no dependency variable
  /*  useEffect(() => {
    console.log("useEffect Called");
  }); */

  //It has empty dependency variable so it will be only called after initial render
  /* useEffect(() => {
    console.log("useEffect Called");
  }, []); */

  //It has a dependency variable and calling of hook will depend on changing value of variable
  /*  useEffect(() => {
    console.log("useEffect Called");
  }, [value]); */

  //it has depency variable but that is static
  useEffect(() => {
    console.log("useEffect Called");
  }, [static_value]);

  const handleClick = () => {
    setValue(value + 1);
  };
  console.log("component rendered");
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => handleClick()}>Increment</button>
    </>
  );
};

export default UseEffectBasics;
