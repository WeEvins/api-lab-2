import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class FilmsScreen extends Component {
    render (){
        return 
        <Fragment>
            <h1> FILMS SCREEN </h1>
            <Link to="/people" className="btn btn-info">"Meet the Cast"</Link>
            </Fragment>
    }
}

export default FilmsScreen;