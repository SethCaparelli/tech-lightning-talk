import React, { Component } from 'react'
import Arm from "./Arm"

class Spine extends Component {
  constructor() {
    super()
    this.state = {
      names: {
        first: ["jim", "rick", "bob"],
        last: ["smith", "rickert", "brown"],
      }
    }
  }

  insertName = (name) => {
    let names = {
      first: [...this.state.names.first, name.first.trim()],
      last: [...this.state.names.last, name.last.trim()]
    }
    this.setState({names: names})
  }

  render() {
    return (
      <div className="App">
        <h1>Im the Spine</h1>
        <div className="names">
          <ul>
            {this.state.names.first.map(name => <li key={name}>{name}</li>)}
          </ul>
          <ul>
            {this.state.names.last.map(name => <li key={name}>{name}</li>)}
          </ul>
        </div>
        <Arm insertName={this.insertName} names={this.state.names}/>
      </div>
    )
  }
}

export default Spine
