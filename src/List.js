import React from "react";
const List = ({ people }) => {
  return (
    <>
      {people.map((person,index) => {
        return (
          <article>
            <div key={person.id} className="row">
              <div className="col">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="col">
                <h2>{person.name}</h2>
                <p>{person.age} years</p>
              </div>
              <div className='col end'>
                  <button>Remove</button>
              </div>
            </div>
            {index!==people.length-1?<hr/>:''}
          </article>
        );
      })}
    </>
  );
};
export default List;
