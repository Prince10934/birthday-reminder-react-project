import React,{useState} from 'react';
import List from './List';
import data from './data'
const App=()=>{
    const [btnText,setBtnText]=useState('Remove All Items');
    return (
        <>
        <div className='container'>
            <div className='box'>
                <List people={data}/>
                <button>{}</button>
            </div>
        </div>
        </>
    )
}
export default App;