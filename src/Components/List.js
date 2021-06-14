import React from 'react';
import Item from './Item'
const List=({data})=>{
    return (
        <main className='container'>
            {
                data.map((item)=>{
                    return (
                        <Item key={item.id} {...item} />
                    )
                })
            }
        </main>
    )
}

export default List;