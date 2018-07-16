import React, { Component, Fragment } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import Login from './Login';
import LoadingBar from 'react-redux-loading';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    };

    render() {
        return (
            <Fragment>
                <LoadingBar />
                <div className="App">
                    {this.props.loading === true
                        ? null
                        : <Login />
                    }
                </div>
            </Fragment>
        );
    };
};

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
