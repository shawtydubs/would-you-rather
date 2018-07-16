import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class Leaderboard extends Component {
    render() {
        const {users} = this.props;

        return (
            <div className="leaderboard">
                <h1>Leaderboard</h1>
                <ul>
                    {_.map(users, user => {
                        const score = _.size(user.answers) + _.size(user.questions);
                        return <li key={user.id}>{user.name}, {score}</li>
                    })}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = ({users}) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);
