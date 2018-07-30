import React, { Component } from 'react';
import './App.css';
import CityImage from './CityImage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDestination: 'Madrid'
    };
    this.destiny = this.destiny.bind(this);

  }
  destiny(event) {
    this.setState({
      myDestination: event.target.value

    })
      //alert(`Tu destino es ${myDestination}`);
  }

  render() { 
    return (
      <div>
        <select onChange={this.destiny}>
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Sevilla">Sevilla</option>
        </select>
        <CityImage city={this.state.myDestination} />
        <p>{`Tu destino es viajar a ${this.state.myDestination}`}</p>
        </div>
      );
  }
}

export default App;
