import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
 }

 componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then((res) => res.json())
   .then((users) => this.setState({ monsters: users}));
   console.log('hello');
 }

 handleChange = (e) => {
  this.setState({ searchField: e.target.value});//callback requiredhere as setSTate is asynchronus
 }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      // console.log(searchField, monster.name, monster.name.toLowerCase().includes((searchField).toLowerCase()));
      return monster.name.toLowerCase().includes((searchField).toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="">Monster's Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}/>
        <br/>
        <br/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
