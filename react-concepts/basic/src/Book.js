import React from "react";

const Book = (props) => {
  //Object destructor/ JavaScript Concept
  const { title, author, img } = props;

  const handleClick1 = () => {
    console.log("handleClick1 Event");
  };

  const handleClick2 = function () {
    console.log("handleClick2 Event");
  };

  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={() => console.log("hello word")}>
        Inline Click Me!
      </button>
      <button type="button" onClick={handleClick1}>
        Outside Click Me 1!
      </button>
      <button type="button" onClick={handleClick2}>
        Outside Click Me 2!
      </button>
    </div>
  );
};

export default Book;
