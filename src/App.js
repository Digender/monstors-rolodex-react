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
   fetch('http://jsonplaceholder.typicode.com/users')
   .then((res) => res.json())
   .then((users) => this.setState({ monsters: users}));
   console.log('hello');
 }

 searchOnChange(e) {
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
        <SearchBox
          placeholder='search monsters'
          handleChange={(e) => {this.searchOnChange(e)}
        }/>
        <br/>
        <br/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
