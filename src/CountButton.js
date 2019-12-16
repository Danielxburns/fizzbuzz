import React from 'react';

class CountButton extends React.Component {
  render(props) {
    console.log(`Count Button props= ${JSON.stringify(this.props)}`)
    return (
      <button className="App-button" type="button" onClick= {this.props.addCount} >Click here to see how I did!</button>
    );
  }
}

export default CountButton;
