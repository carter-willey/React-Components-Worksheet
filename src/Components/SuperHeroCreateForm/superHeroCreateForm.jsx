import React, { Component } from 'react';

class SuperHeroCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        superheroId: 0,
        name: '',
        primaryAbility: '',
        secondaryAbility: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addNewHero(this.state)
  }


  render() { 
    return ( 
      <div>
        <label>Create New Hero</label>
        <form onSubmit={this.handleSubmit}>
          Hero Name: <input type="text" name='name' onChange={this.handleChange} value={this.state.newHeroName}  />
          Primary Ability: <input type="text" name='primaryAbility' onChange={this.handleChange} value={this.state.primaryAbility}  />
          Secondary Ability: <input type="text" name='secondaryAbility' onChange={this.handleChange} value={this.state.secondaryAbility}  />
          <input type="submit" value="Create Hero" />
        </form>
      </div>
    );
  }
}
 
export default SuperHeroCreateForm;