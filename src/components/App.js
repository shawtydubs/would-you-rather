import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AddQuestion from './AddQuestion';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Login from './Login';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import QuestionDetail from './QuestionDetail';
import User from './User';

import {handleInitialData} from '../actions/shared';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    };

    render() {
        const {authedUser, loading} = this.props;

        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="container">
                        {loading
                            ? null
                            : authedUser
                            ? <div>
                                <header className="header">
                                    <Nav />
                                    <User />
                                </header>
                                <Route path="/" exact component={Home} />
                                <Route path="/add" component={AddQuestion} />
                                <Route path="/question/:id" component={QuestionDetail} />
                                <Route path="/leaderboard" component={Leaderboard} />
                              </div>
                            : <Login />
                        }
                    </div>
                </Fragment>
            </Router>
        );
    };
};

function mapStateToProps({authedUser, loadingBar}) {
    return {
        authedUser,
        loading: loadingBar.default === 1,
    }
}

export default connect(mapStateToProps)(App);
