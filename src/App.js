import './App.css';
import React, { Component } from 'react';

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
      <h1>Hello C</h1>
     );
  }
}
 
export default App;
