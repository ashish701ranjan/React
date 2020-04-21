import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: 'Ashish Ranjan'
  }

  usernameStateHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {

    const style = {
      display: 'block',
      backgroundColor: '#3CBC8D',
      color: 'white',
      width: '100%',
      padding: '4px',
      border: '2px solid #ccc'
    }

    return (
      <div className="App">
        <UserInput style={style} handler={this.usernameStateHandler} value={this.state.username} />
        <UserOutput username={this.state.username}>This is from First UserOutput</UserOutput>
        <UserOutput username={this.state.username}>I am the second UserOutput</UserOutput>
      </div>
    );
  }
}

export default App;
