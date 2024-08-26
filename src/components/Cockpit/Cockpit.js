import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props)=> {
    const toggleButtonRef = useRef(null);
    useEffect(()=> {
        console.log('[Cockpit.js] useEffect');
        toggleButtonRef.current.click();
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

    const authContext = useContext(AuthContext);

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
            <div>
                <button ref = {toggleButtonRef} className={btnClass} onClick={props.clicked}>Toggle Names</button>
                <button onClick={authContext.login} className={btnClass}>Login</button>
            </div>
        </div>    
    )
}

export default React.memo(Cockpit);