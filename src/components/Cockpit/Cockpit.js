import React, {useEffect} from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props)=> {
    useEffect(()=> {
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=> {
            alert('Data saved to cloud.')
        }, 1000);
        return ()=> {
            console.log('[Cockpit.js] cleanup');
        }
    }, []);

    useEffect(()=> {
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=> {
            console.log('[Cockpit.js] cleanup 2nd useEffect');
        }
    });


    const assignedClasses = [];
    if (props.personsLength <= 2) 
        assignedClasses.push(classes.red);
    if (props.personsLength <= 1)
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

export default React.memo(Cockpit);