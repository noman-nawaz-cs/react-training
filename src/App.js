import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from './components/Persons/Persons'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import CockPit from '../src/components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 'dan332', name: 'Noman', age: 28 },
      { id: 'dan333', name: 'Azeem', age: 29 },
      { id: 'dan334', name: 'Zaeem', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons:!doesShow });
  };

  render() {
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
      <div className={classes.App}>
        <CockPit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
