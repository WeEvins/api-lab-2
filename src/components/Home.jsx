import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// class HomeScreen extends Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return 
//         <div>
//             <h1>HOME SCREEN</h1>
//             <Link to="/people" className="btn btn-info">"Meet the Cast"</Link>
//          </div>
//     }
// }
let homeScreen = (props) => {
    return (
        <div>
            <h1>Home Screen </h1>
            <Link to="/people" className="btn btn-info">Meet The Cast</Link>
            <Link to="/locations" className="btn btn-info">Spirit Me Away</Link>
            <Link to="/films" className="btn btn-info">What To Watch</Link>
        </div>
    )
}


export default homeScreen;