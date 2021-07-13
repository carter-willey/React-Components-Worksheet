import './App.css';
import React, { Component } from 'react';
//import DisplayName from './Components/DisplayName/displayName';
//import NameList from './Components/NamesList/nameList';
//import AlertUser from './Components/AlertUser/alertUser';
import SuperHeroTable from './Components/SuperHeroTable/superHeroTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroes: [
          {
              superheroId: 1,
              name: 'Batman',
              primaryAbility: 'Wealthy',
              secondarAbility: 'Rich'
          },
          {
              superheroId: 2,
              name: 'Superman',
              primaryAbility: 'Super strength',
              secondarAbility: 'Fly'
          },
          {
              superheroId: 3,
              name: 'Spiderman',
              primaryAbility: 'Spider senses',
              secondarAbility: 'Shoots web'
          }
      ]
    }
  }
  render() { 
    return ( 
      //<DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
        //<NameList nameList={this.state.names} />
        //<AlertUser />
        <SuperHeroTable superheroes={this.state.superheroes} />
     );
  }
}
 
export default App;
