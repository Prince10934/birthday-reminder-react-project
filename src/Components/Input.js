import React from "react";
import useForm from "./UseForm";

const Add = (props) => {
  const [values, handleOnChange] = useForm({ name: "", age: "" ,image:""});

  const handleOnSubmit=(e)=>{
    props.setItem((prevItem)=>{
        return (
            prevItem.push({

            })
        )
    })
}
  return (
    <div className="formItem">
      <h3 className="formHeader">Add New Birthday.</h3>
      <form className="form" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          id="name"
          type="text"
          name="name"
          value={values.name}
          placeholder="Enter name of person"
          onChange={handleOnChange}
        />
        <label htmlFor="age">Age :</label>
        <input
          id="age"
          type="number"
          name="age"
          value={values.age}
          placeholder="Enter age of the person"
          onChange={handleOnChange}
        />
        <input 
        id='image'
        type='file'
        name='image'
        value={values.image}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Add;
