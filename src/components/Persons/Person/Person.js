import React, {Component} from 'react';
import classes from './Person.module.css'

class Person extends Component {
    render() {
        console.log('[Person.js rendering...]');
        return (
            <div className={classes.Person}>
                <h2>Name: {this.props.name} </h2>
                <p onClick = {this.props.click}>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.change} value={this.props.name}/>
            </div>
        )
    } 
};

export default Person;