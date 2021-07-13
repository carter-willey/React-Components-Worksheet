import './App.css';
import React, { Component } from 'react';
import DisplayName from './Components/DisplayName/displayName';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Reggie',
      lastName: 'White'
    }
  }
  render() { 
    return ( 
      <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
     );
  }
}
 
export default App;
