import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        const {questions} = this.props;

        return (
            <div className="home">
                <h1>Would You Rather?</h1>
                {_.map(questions, question => (
                    <ul key={question.id}>
                        <li key={`${question.id}-1`}>{question.optionOne.text}</li>
                        <li key={`${question.id}-2`}>{question.optionTwo.text}</li>
                    </ul>
                ))}
            </div>
        );
    };
};

const mapStateToProps = ({questions}) => {
    return {
        questions
    }
};

export default connect(mapStateToProps)(Home);
