import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    // static getDerivedStateFromProps(props,state) {
    //     console.log('[Persons.js getDerivedStateFromProps]');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js shouldComponentUpdate]');
    //     if(nextProps.persons !== this.props.persons)
    //         return true;
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js getSnapshotBeforeUpdate]');
        return {message: 'Snapshot before update'}
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Persons.js componentDidUpdate]');
        console.log(Snapshot);
    }

    render(){
        console.log('[Persons.js rendering...]');
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={()=> this.props.clicked(index)}
                change={(event)=> this.props.changed(event, person.id)}
            />   
        }
    )}
}

export default Persons;