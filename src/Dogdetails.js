import React, { Component } from 'react';
import './DogDetails.css';
import {Link} from 'react-router-dom';

class Dogdetails extends Component {
    render() {
        let { dog } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="DogDetails row justify-content-center mt-5">
                        <div className="col-li col-lg-5">
                            <div className="DogDetails-card card">
                                <img className="card-image-card" src={dog.src} alt={dog.name} />
                                <div className="card-body">
                                    <h2 className="car-title">{dog.name}</h2>
                                    <h4 className="card-subtitle  text-muted">{dog.age} years old</h4>
                                </div>
                                <ul className="List-group list-group-flush">
                                    {dog.facts.map((fact, i) => (
                                        <li className="list-group-item" key={i}>{fact}</li>
                                    ))} 
                                </ul>
                                <div className="card-body">
                                    <Link to="/dogs" className="btn btn-info">GO BACK</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dogdetails;