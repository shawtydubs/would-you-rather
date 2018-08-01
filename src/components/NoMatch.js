import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NoMatch extends Component {
    render() {
        return (
            <div>
                <h1>Sorry</h1>
                <p>You seem to be a bit lost. Return to <Link to="/">Home</Link>.</p>
                <img src={require("../images/lost.jpg")} alt="Lost traveler with compass" />
            </div>
        );
    };
};

export default NoMatch;
