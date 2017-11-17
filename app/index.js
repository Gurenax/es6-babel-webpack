// import Entity from './entity';

// class Hobbit extends Entity {
//   constructor(name, height) {
//     super(name, height);
//   }

//   greet() {
//     console.log(`Hello! I'm ${this.name} from the Shire!`);
//   }
// }

// let frodo = new Hobbit("Frodo Baggins", 4.5);
// console.log(frodo);
// frodo.greet();
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = process.env.OPEN_WEATHER_MAP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'New York'
    }
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
    .then(response => response.json())
    .then(json => {
      this.setState({description: json.weather[0].description})
    });
  }

  render() {
    return (
      <div>
        <h1>Weather Report for {this.state.city}!</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}
let root = document.getElementById('root');
ReactDOM.render(<App/>, root);