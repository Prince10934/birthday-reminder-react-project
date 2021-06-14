import React from 'react';
import icon from '../Icon/cross.png'
const Icon=({id,removeItem})=>{
    return (
        <div className='subItem'>
                <img id={id} onClick={removeItem} className='icon' src={icon} alt='i'/>
        </div>
    )
}

export default Icon;