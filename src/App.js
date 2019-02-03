// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
  constructor () {
    super()
    this.state={
      peopleinSpace: []
    }
  }
  componentDidMount () {
    fetch('http://api.open-notify.org/astros.json')
    .then(response=>response.json())
    .then()
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
