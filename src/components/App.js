import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AddQuestion from './AddQuestion';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Login from './Login';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';

import './App.css';

import {handleInitialData} from '../actions/shared';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    };

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="App">
                        <Nav />
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path="/" exact component={Home} />
                                <Route path="/add" component={AddQuestion} />
                                <Route path="/leaderboard" component={Leaderboard} />
                              </div>
                        }
                    </div>
                </Fragment>
            </Router>
        );
    };
};

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
