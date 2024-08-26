import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from './components/Persons/Persons'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import CockPit from '../src/components/Cockpit/Cockpit';
import withClass from './hoc/withClass'
import Auxiliary from './hoc/Auxiliary';
import AuthContext from './context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  state = {
    persons: [
      { id: 'dan332', name: 'Noman', age: 28 },
      { id: 'dan333', name: 'Azeem', age: 29 },
      { id: 'dan334', name: 'Zaeem', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  deletePersonHandler = (personIndex) => {
    // Always make a copy to ensure update state immutably
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    // Flexible Lists
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) =>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons:!doesShow });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />
        </div>
      )
    }

    return (
      <Auxiliary>
        <button onClick={() => this.setState({showCockpit:false})}>Remove Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler }}>
          {this.state.showCockpit? (
            <CockPit
              showPersons = {this.state.showPersons}
              personsLength = {this.state.persons.length}
              clicked = {this.togglePersonsHandler}
            />
            ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
