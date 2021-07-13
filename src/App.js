import './App.css';
import React, { Component } from 'react';
//import DisplayName from './Components/DisplayName/displayName';
//import NameList from './Components/NamesList/nameList';
import AlertUser from './Components/AlertUser/alertUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
  }
  }
  render() { 
    return ( 
      //<DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
        //<NameList nameList={this.state.names} />
        <AlertUser />
     );
  }
}
 
export default App;
