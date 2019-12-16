import React from 'react';
import logo from './images.png';
import './App.css';
import CountButton from './CountButton.js';
import Count from './Count.js';
import fizzbuzz from './fizzbuzz.js'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        showComponent: false,
        numbers: ['initial']
      }
    this.handleClick = this.handleClick.bind(this);
    }
  handleClick = () => {
    console.log('clicked');
    this.setState({
      showComponent: true,
      numbers: fizzbuzz()
    })
  };

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FizzBuzz!</h1>
        <div>
          {this.state.showComponent ? <Count numbers={this.state.numbers}/> : null} 
        </div>
        <h3>A classic programming interview question</h3>
        <p>
        Write a program that prints the numbers from 1 to 100. If it’s a multiple of 3, it should print “Fizz”. If it’s a multiple of 5, it should print “Buzz”. If it’s a multiple of 3 and 5, it should print “Fizz Buzz”.
        </p>
        <div>
          <CountButton addCount={this.handleClick} />
        </div>
      </header>
    </div>
    );
  }
}
export default App;
