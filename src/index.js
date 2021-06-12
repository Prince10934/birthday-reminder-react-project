import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './style.css';
const Birthday=()=>{
    return (
        <>
            <App/>
        </>
    )
}
ReactDom.render(<Birthday/>,document.getElementById('root'));