import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class Leaderboard extends Component {
    render() {
        const {users} = this.props;

        return (
            <div>
                <h1>Leaderboard</h1>
                <table className="leaderboard">
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th># Asked</th>
                            <th># Answered</th>
                            <th>Score</th>
                        </tr>
                        {_.map(users, (user, index) => (
                            <tr key={user.username}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="leaderboard-user">
                                        <img src={require(`../images/${user.avatar}`)} className="avatar user-item" alt={`Avatar of ${user.name}`}/>
                                        {user.name}
                                    </div>
                                </td>
                                <td>{user.asked}</td>
                                <td>{user.answered}</td>
                                <td className="leaderboard-score">{user.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
};

const mapStateToProps = ({users}) => {
    const userScores = [];

    for (let user in users) {
        userScores.push({
            username: user,
            name: users[user].name,
            avatar: users[user].avatarURL,
            asked: _.size(users[user].questions),
            answered: _.size(users[user].answers),
            score: _.size(users[user].questions) + _.size(users[user].answers)
        })
    }

    const sortedUserScores = _(userScores)
        .sortBy(['score'])
        .reverse()
        .valueOf();

    return {
        users: sortedUserScores
    }
}

export default connect(mapStateToProps)(Leaderboard);
