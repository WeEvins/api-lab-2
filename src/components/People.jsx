import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

   let peopleCard = (props) => {
        return 
        <div className="card">
          <h5 className="card-header">{props.people.name}</h5>
          <div className="card-body">
            <h5 className="card-title">{props.people.gender}</h5>
            <p className="card-text">{props.people.age}</p>
            <Link to={`/people/${props.people.url}`} className="btn btn-primary">Be Spirited Away!</Link>
          </div>
        </div>
   }


export default peopleCard;