import React,{useState,useEffect} from "react";
const List = ({ data }) => {
  const [people,setPeople]=useState(data);
  const removeItem=(e)=>{
     setPeople(()=>{
       return people.filter((person)=>{
         return Number(e.target.value)!==person.id;
       })
     })
  }
  return (
    <>
      {people.map((person) => {
        const {id,name,image,age}=person;
        return (
          <article key={id} className='box' >
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
            <div className='item'>
            <button className='btn end' value={id} onClick={removeItem}>Remove</button>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
