import React from 'react';
import Img from './Image';
import Info from './Info/Info';
import Icon from './Icon';
const Item=({name,age,image,id,deleteItem})=>{
    return (
        <div className='item'>
            <Img src={image} alt={name}/>
            <Info name={name} age={age} />
            <Icon id={id} removeItem={deleteItem}/>
        </div>
    )
}

export default Item;