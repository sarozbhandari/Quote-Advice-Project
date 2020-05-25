import React from 'react';
import axios from 'axios';

import './App.css';


class App extends React.Component {

  state = {
    advice: ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip; /* Destructure */
        
        this.setState({
        /* Setting value of advice from fetchAdvice to state advice */
          advice
        });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className = "card">
          <h1 className = "heading">{this.state.advice}</h1>
          <button className = "button" onClick = {this.fetchAdvice}>
              <span>Another Advice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
