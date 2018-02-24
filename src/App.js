import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flag Guessing Quiz</h1>
        </header>
        <Quiz />
      </div>
    );
  }
}

export default App;
