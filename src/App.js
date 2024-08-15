import React, { Component } from 'react';
import './App.css';
import Person from '../src/components/Person/Person';

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
    const style = {
      backgroundColor: '#eee',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            // Outputting List of persons
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={()=> this.deletePersonHandler(index)}
                change={(event)=>this.nameChangeHandler(event, person.id)}
              />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <div><button style={style} onClick={this.togglePersonsHandler}>Toggle Names</button></div>
        {persons}
      </div>
    );
  }
}

export default App;
