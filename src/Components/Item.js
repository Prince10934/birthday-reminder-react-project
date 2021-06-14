import React from 'react';
import Img from './Image';
import Info from './Info/Info';
const Item=({name,age,image})=>{
    return (
        <div className='item'>
            <Img src={image} alt={name}/>
            <Info name={name} age={age} />
        </div>
    )
}

export default Item;