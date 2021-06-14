import React from "react";
import Name from "./Name";
import Age from "./Age";
const Info = ({ name, age }) => {
  return (
    <>
      <div className="info">
        <Name name={name} />
        <Age age={age} />
      </div>
    </>
  );
};
export default Info;
