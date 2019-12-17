import React from 'react'

class Count extends React.Component {

  render(props) {
    return (
        <div className="Count-Line">{this.props.numbers + ', '}</div>
    )
  }
};

export default Count;
