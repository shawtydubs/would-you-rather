import React, {Component} from 'react';
import {connect} from 'react-redux';

class User extends Component {
    render() {
        const {avatar, name} = this.props;

        return (
            <div className="user">
                <img src={require(`../images/${avatar}`)} className="avatar user-item"/>
                <span className="user-item">{name}</span>
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
