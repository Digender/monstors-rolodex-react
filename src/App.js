import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [{
          name: 'Frankenstein',
          key: 1,
      }, {
        name: 'Dracula',
        key: 2,
      }, {
        name: 'Zombie',
        key: 3,
      }]
    };
 }

 componentDidMount() {
   fetch('http://jsonplaceholder.typicode.com/users')
   .then((res) => res.json())
   .then((users) => this.setState({ monsters: users}));
   console.log('hello');
 }
  
  render() {
    return (
      <div className="App">
        { this.state.monsters.map(monster => 
          <h1 key={monster.key}>{monster.name}</h1>
        )}
      </div>
    );
  }
}

export default App;
