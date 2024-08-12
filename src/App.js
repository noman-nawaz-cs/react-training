import React, { Component } from 'react';
import './App.css';
import Person from '../src/components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Noman', age: 28 },
      { name: 'Azeem', age: 29 },
      { name: 'Zaeem', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Hassan', age: 28 },
        { name: newName, age: 29 },
        { name: 'Awais', age: 27 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Noman', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Zaeem', age: 27 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: '#eee',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <div><button style={style} onClick={this.switchNameHandler.bind(this,'Ali')}>Switch Name</button></div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={()=> this.switchNameHandler('Ali')}
          change={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbies: Reading
        </Person>
      </div>
    );
  }
}

export default App;
