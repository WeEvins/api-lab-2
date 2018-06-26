import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './components/Films'
import People from './components/People'
import Locations from './components/Locations'
import Home from './components/Home'

const FILM_API = "https://ghibliapi.herokuapp.com/films"
const PEOPLE_API = "https://ghibliapi.herokuapp.com/people"
const LOCATIONS_API = "https://ghibliapi.herokuapp.com/locations"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      people: [],
      locations: []
    }
  };

  handleClickFilm() {
    fetch(FILM_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return response
      })
      .then((response) => this.setState({ movies: response }))
  }

  handleClickPeople() {
    fetch(PEOPLE_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return response
      })
      .then((response) => this.setState({ people: response }))
  }

  handleClickLocation() {
    fetch(LOCATIONS_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return response
      })
      .then((response) => this.setState({ locations: response }))
  }

  render() {
    return (
      <div>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/people" component={People} />
          </Switch>
        </Fragment>
      </Router>

  
      </div>
);
  }
}
export default App;
