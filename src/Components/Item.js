import React from 'react';
import Img from './Image';
import Info from './Info/Info';
import Icon from './Icon';
const Item=({name,age,image})=>{
    return (
        <div className='item'>
            <Img src={image} alt={name}/>
            <Info name={name} age={age} />
            <Icon/>
        </div>
    )
}

export default Item;