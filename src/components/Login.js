import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {setAuthedUser} from '../actions/authedUser';

class Login extends Component {
    handleChange = (event) => {
        const id = event.target.value;

        this.props.dispatch(setAuthedUser(id));
    };

    render() {
        const {users} = this.props;

        return (
            <div>
                <h1>Please Log In</h1>
                <select name="username" defaultValue="" onChange={this.handleChange}>
                    <option value="" disabled>Select a user...</option>
                    {_.map(users, user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    };
};

const mapStateToProps = ({users}) => {
    return {
        users,
    }
};

export default connect(mapStateToProps)(Login);
