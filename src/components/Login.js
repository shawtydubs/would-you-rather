import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Would You Rather?</h1>
                <select name="username">
                    <option>User 1</option>
                </select>
            </div>
        );
    };
};

const mapStateToProps = ({authedUser}) => {
    return {
        authedUser,
    }
};

export default connect(mapStateToProps)(Login);
