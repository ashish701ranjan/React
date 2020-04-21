import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    inputText: []
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value.split('')
    });
  }

  removeCharHandler = (index) => {
    const newInputText = [...this.state.inputText];
    newInputText.splice(index, 1);
    this.setState({
      inputText: newInputText
    });
  }

  getChardCompList = () => {
    return this.state.inputText.map((eachChar, index) => {
      return <Char
        inputChar={eachChar}
        key={index}
        onClick={this.removeCharHandler.bind(this, index)}/>
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Assignment - 2: Lists</h3>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.inputText.join('')}/>
        <p>Input Text Length: {this.state.inputText.length}</p>
        <Validation textLength={this.state.inputText.length} />
        <div>
          {this.getChardCompList()}
        </div>
      </div>
    );
  }
}

export default App;
