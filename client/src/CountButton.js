import React from 'react';

class CountButton extends React.Component {
  render(props) {
    return (
      <button className="App-button" type="button" onClick= {this.props.addCount} >Click here to see the results</button>
    );
  }
}

export default CountButton;
