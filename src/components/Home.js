import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';

class Home extends Component {
    state = {
        showAnsweredQuestions: false
    };

    toggleQuestions = () => {
        const {showAnsweredQuestions} = this.state;

        this.setState({showAnsweredQuestions: !showAnsweredQuestions})
    };

    render() {
        const {questions, user} = this.props;
        const {showAnsweredQuestions} = this.state;

        const answeredQuestions = _.filter(questions, question => _.includes(_.keys(user.answers), question.id));
        const unansweredQuestions = _.reject(questions, question => _.includes(_.keys(user.answers), question.id));

        const questionsToShow = showAnsweredQuestions ? answeredQuestions : unansweredQuestions;
        const titleText = showAnsweredQuestions ? 'Answered Questions' : 'Unanswered Questions';
        const buttonText = showAnsweredQuestions ? 'Show Unanswered Questions' : 'Show Answered Questions';

        return (
            <div className="home">
                <h1>{titleText}</h1>
                <button className="btn" onClick={this.toggleQuestions}>{buttonText}</button>
                <div className="question-list">
                    {_.map(questionsToShow, question => (
                        <div key={question.id} className="question-panel">
                            <div className="option one">{question.optionOne.text}</div>
                            <div className="option two">{question.optionTwo.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({authedUser, questions, users}) => {
    return {
        questions,
        user: users[authedUser]
    }
};

export default connect(mapStateToProps)(Home);
