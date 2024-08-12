import React from 'react';
import './Person.css'

const person = ( props ) => {
    return (
        <div className='Person'>
            <h2>Name: {props.name} </h2>
            <p onClick = {props.click}>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    )
};

export default person;