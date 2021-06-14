import React from "react";

const Add = () => {
  return (
    <div className="formItem">
      <h3 className="formHeader">Add New Birthday.</h3>
      <form className='form'>
        <label for='name'>
          Name : 
        </label>
          <input id='name' type="text" placeholder="Enter name of person" />
        <label for='age'>
          Age : 
        </label>
          <input id='age' type="number" placeholder="Enter age of the person" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Add;
