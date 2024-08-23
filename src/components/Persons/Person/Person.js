import React, {Component} from 'react';
import classes from './Person.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js rendering...]');
        return  <Auxiliary>
            {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
            <h2>Name: {this.props.name} </h2>
            <p onClick = {this.props.click}>Age: {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type='text' ref={this.inputRef} onChange={this.props.change} value={this.props.name}/>
        </Auxiliary>
    } 
};

export default withClass(Person,classes.Person);