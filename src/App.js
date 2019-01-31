import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Chase', age:22},
      {name: 'Yushi', age:22}
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Chase', age:22},
        { name: event.target.value, age:22}
      ]
    })
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    this.setState( {
      persons: [
        {name: newName, age: 23},
        {name: 'Scru', age:23}
      ]
    })
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} 
            age={person.age} />
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Chaseroo!")}>My hobbies: Running</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}>My hobbies: Hiking</Person> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <button 
        style={style}
        onClick={() => this.switchNameHandler("Da Chase")}>Switch Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
