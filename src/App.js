import React,{useState} from 'react';
import List from './List';
import data from './data'
const App=()=>{
    const [btnText,setBtnText]=useState('Remove All Items');
    return (
        <>
        <main >
            <section className='container'>
                <List data={data}/>
                <button className='btn middle'>{btnText}</button>
            </section>
        </main>
        </>
    )
}
export default App;