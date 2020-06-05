import React, { Component } from 'react'

class App extends Component {
  handleClick = (e: React.MouseEvent) => {
    console.log('Hello World')
  }

  render() {
    return <div onClick={this.handleClick}>Hello World</div>
  }
}

export default App
