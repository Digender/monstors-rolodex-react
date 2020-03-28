import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
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
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
