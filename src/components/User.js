import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setAuthedUser} from '../actions/authedUser';

class User extends Component {
    handleLogout = () => {
        this.props.dispatch(setAuthedUser(''));
    };

    render() {
        const {avatar, name} = this.props;

        return (
            <div className="user">
                <img src={require(`../images/${avatar}`)} className="avatar user-item" alt={`Avatar of ${name}`}/>
                <span className="user-item user-name">{name}</span>
                <Link to="/login" className="user-item nav-link" onClick={this.handleLogout}>Logout</Link>
            </div>
        );
    };
};

const mapStateToProps = ({authedUser, users}) => {
    return {
        name: users[authedUser].name,
        avatar: users[authedUser].avatarURL,
    }
};

export default connect(mapStateToProps)(User);
