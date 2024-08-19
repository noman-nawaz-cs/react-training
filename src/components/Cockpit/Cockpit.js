import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props)=> {
    const assignedClasses = [];
    if (props.persons.length <= 2) 
        assignedClasses.push(classes.red);
    if (props.persons.length <= 1)
        assignedClasses.push(classes.bold);

    let btnClass = classes.btn + ' ' + classes.btnNotToggle;
    if(props.showPersons)
        btnClass = classes.btn + ' ' + classes.btnToggle;

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <div><button className={btnClass} onClick={props.clicked}>Toggle Names</button></div>
        </div>    
    )
}

export default cockpit;