import React from 'react'

class Count extends React.Component {
  render(props) {
    return (
        this.props.numbers.map((x) => {
            return window.setTimeout(()=> {
              console.log(x)
            /* return <div>{x}</div> */
          }, 2000)
        })
    )
  }
};

export default Count;
