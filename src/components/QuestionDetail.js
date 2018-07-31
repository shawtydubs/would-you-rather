import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleSaveQuestionAnswer} from '../actions/questions';

class QuestionDetail extends Component {
    handleVote = (event) => {
        const {authedUser, dispatch, id} = this.props;
        const vote = event.target.value;

        dispatch(handleSaveQuestionAnswer(authedUser, id, vote));
    }

    render() {
        const {avatar, name, question: {optionOne, optionTwo}} = this.props;

        const totalVotes = optionOne.votes.length + optionTwo.votes.length;

        return (
            <div className="question-detail">
                <h1>Would You Rather?</h1>
                <button value="optionOne" className="option one poll" onClick={this.handleVote}>{optionOne.text}</button>
                Number of Votes: {optionOne.votes.length}<br />
                Percentage of Votes: {Math.floor(optionOne.votes.length / totalVotes * 100)}%
                <button value="optionTwo" className="option two poll" onClick={this.handleVote}>{optionTwo.text}</button>
                Number of Votes: {optionTwo.votes.length}<br />
                Percentage of Votes: {Math.floor(optionTwo.votes.length / totalVotes * 100)}%
                <div className="question-author">
                    Asked by
                    <img src={require(`../images/${avatar}`)} className="avatar author-img" alt={`Avatar of ${name}`}/>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({authedUser, questions, users}, props) => {
    const {id} = props.match.params;
    const question = questions[id];

    return {
        authedUser,
        avatar: users[question.author].avatarURL,
        id,
        name: users[question.author].name,
        question,
    };
};

export default connect(mapStateToProps)(QuestionDetail);
