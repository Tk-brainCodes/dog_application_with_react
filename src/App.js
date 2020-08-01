import React, { Component } from 'react';
import DogList from './DogList';
import Dogdetails from './Dogdetails';
import hazel from './hazel.jpg';
import tubby from './tubby.jpg';
import whiskey from './whiskey.jpg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
 static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    const getDog = (props) => {
      let name = props.match.params.name;
      console.log(this.props.dogs);
      let currentDog = this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
      return <Dogdetails {...props} dog={currentDog} />;
    };
    return (
        <div className="App">
          <Switch>
            <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
            <Route exact path="/dogs/:name" render={getDog} />
          </Switch>
        </div>
    )
  }
}

export default App;
