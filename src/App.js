import './App.css';
import React, { Component } from 'react';
//import DisplayName from './Components/DisplayName/displayName';
//import NameList from './Components/NamesList/nameList';
//import AlertUser from './Components/AlertUser/alertUser';
import SuperHeroTable from './Components/SuperHeroTable/superHeroTable';
import SuperHeroCreateForm from './Components/SuperHeroCreateForm/superHeroCreateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroes: [
          {
              superheroId: 1,
              name: 'Batman',
              primaryAbility: 'Wealthy',
              secondaryAbility: 'Rich'
          },
          {
              superheroId: 2,
              name: 'Superman',
              primaryAbility: 'Super strength',
              secondaryAbility: 'Fly'
          },
          {
              superheroId: 3,
              name: 'Spiderman',
              primaryAbility: 'Spider senses',
              secondaryAbility: 'Shoots web'
          }
      ]
    }
  }
  addNewHero = (newHero) => {
    newHero.superheroId = this.state.superheroes.length + 1
    let tempSuperHeros = this.state.superheroes
    tempSuperHeros.push(newHero)
    this.setState({
      superheroes: tempSuperHeros
    })
    console.log(this.state.superheroes);
  }
  
  render() { 
    return ( 
      //<DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
        //<NameList nameList={this.state.names} />
        //<AlertUser />
        <div>
        <SuperHeroTable superheroes={this.state.superheroes} />
        <SuperHeroCreateForm addNewHero={this.addNewHero}/>
        </div>
     );
  }
}
 
export default App;
