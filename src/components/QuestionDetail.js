import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleSaveQuestionAnswer} from '../actions/questions';
import classNames from 'classnames';
import _ from 'lodash';
import NoMatch from './NoMatch';

class QuestionDetail extends Component {
    handleVote = (event) => {
        const {authedUser, dispatch, id} = this.props;
        const vote = event.target.value;

        dispatch(handleSaveQuestionAnswer(authedUser, id, vote));
    }

    formatPercentage = (votes) => {
        const {question: {optionOne, optionTwo}} = this.props;
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;

        if (totalVotes === 0) {
            return '0%';
        };

        return `${Math.floor(votes / totalVotes * 100)}%`;
    }

    generateClassName = (value) => {
        const {authedUser, question} = this.props;

        return classNames(
            "poll",
            "option",
            {
                "one": value === "optionOne",
                "two": value === "optionTwo",
                "selected": _.includes(question[value].votes, authedUser),
            }
        );
    }

    render() {
        if (_.isNil(this.props.question)) {
            return <NoMatch />
        }

        const {authedUser, avatar, name, question: {optionOne, optionTwo}} = this.props;

        const hasAnswered = _.includes(optionOne.votes, authedUser) || _.includes(optionTwo.votes, authedUser);

        return (
            <div className="question-detail">
                <h1>Would You Rather?</h1>

                <button
                    value="optionOne"
                    className={this.generateClassName('optionOne')}
                    onClick={this.handleVote}
                    disabled={hasAnswered}
                >
                    {optionOne.text}
                </button>

                {hasAnswered && (
                    <div>
                        Number of Votes: {optionOne.votes.length}<br />
                        Percentage of Votes: {this.formatPercentage(optionOne.votes.length)}
                    </div>
                )}

                <button
                    value="optionTwo"
                    className={this.generateClassName('optionTwo')}
                    onClick={this.handleVote}
                    disabled={hasAnswered}
                >
                    {optionTwo.text}
                </button>

                {hasAnswered && (
                    <div>
                        Number of Votes: {optionTwo.votes.length}<br />
                        Percentage of Votes: {this.formatPercentage(optionTwo.votes.length)}
                    </div>
                )}

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

    if (_.isNil(question)) {
        return {
            question
        };
    }

    return {
        authedUser,
        avatar: users[question.author].avatarURL,
        id,
        name: users[question.author].name,
        question,
    };
};

export default connect(mapStateToProps)(QuestionDetail);
