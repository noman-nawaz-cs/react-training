import React from 'react';
import classes from './Person.module.css'

const person = ( props ) => {
    let random = Math.random();
    if(random > 0.90)
        throw new Error('Something went wrong')
    return (
        <div className={classes.Person}>
            <h2>Name: {props.name} </h2>
            <p onClick = {props.click}>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    )
};

export default person;