import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import './App.css';
import Films from './components/Films'
// import People from './components/People'
import Locations from './components/Locations'
import Home from './components/Home'

const FILM_API = "https://ghibliapi.herokuapp.com/films"
const PEOPLE_API = "https://ghibliapi.herokuapp.com/people"
const LOCATIONS_API = "https://ghibliapi.herokuapp.com/locations"


class App extends Component {
  constructor(props) {
    super(props)
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
      .then((response) => this.setState({ movies: response }))
  }

  handleClickLocation() {
    fetch(LOCATIONS_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return response
      })
      .then((response) => this.setState({ movies: response }))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Link exact path="/" component={Home} />
            <Link exact path="/films" component={Films} />
            <Link exact path="/locations" component={Locations} />
            {/* <Link exact path="/people" component={People} /> */}
          </Switch>
        </Fragment>
      </Router>

    );
  }
}
export default App;
