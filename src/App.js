// create your App component here
import React, {Component} from 'react';

export default class App extends Component {
  constructor () {
    super()
    this.state={
      peopleInSpace: []
    }
  }
  componentDidMount () {
    fetch('http://api.open-notify.org/astros.json')
    .then(response=>response.json())
    .then(({people}) => this.setState({peopleInSpace : people}))
  }
  
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person,ind) => <h1>{person.name}</h1>)}
      </div>
    )
  }
}
