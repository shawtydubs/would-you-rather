import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionDetail extends Component {
    render() {
        const {avatar, name, question: {optionOne, optionTwo}} = this.props;

        return (
            <div className="question-detail">
                <h1>Would You Rather?</h1>
                <div>{optionOne.text}</div>
                <div>{optionTwo.text}</div>
                <img src={require(`../images/${avatar}`)} className="avatar-large" alt={`Avatar of ${name}`}/>
            </div>
        );
    };
};

const mapStateToProps = ({questions, users}, props) => {
    const {id} = props.match.params;
    const question = questions[id];

    return {
        avatar: users[question.author].avatarURL,
        id,
        name: users[question.author].name,
        question,
    };
};

export default connect(mapStateToProps)(QuestionDetail);
