import React, {Component} from 'react';
import classes from './Person.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[Person.js rendering...]');
        return  <Auxiliary>
                <h2>Name: {this.props.name} </h2>
                <p onClick = {this.props.click}>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.change} value={this.props.name}/>
        </Auxiliary>
    } 
};

export default withClass(Person,classes.Person);