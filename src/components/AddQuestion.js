import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import {handleAddQuestion} from '../actions/questions';

class AddQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    };

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {optionOneText, optionTwoText} = this.state;
        const {authedUser, dispatch} = this.props;

        dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));

        this.setState({
            optionOneText: '',
            optionTwoText: '',
            toHome: true,
        })
    }

    render() {
        const {optionOneText, optionTwoText, toHome} = this.state;

        const disableButton = _.isEmpty(optionOneText) || _.isEmpty(optionTwoText);

        if (toHome) {
            return <Redirect to='/' />
        }

        return (
            <div className="add-question">
                <h1>Would You Rather?</h1>
                <form className="add-question-form" onSubmit={this.handleSubmit}>
                    <input
                        className="option-input"
                        placeholder="Option One"
                        name="optionOneText"
                        value={optionOneText}
                        onChange={this.handleChange}
                    />
                    <input
                        className="option-input"
                        placeholder="Option Two"
                        name="optionTwoText"
                        value={optionTwoText}
                        onChange={this.handleChange}
                    />
                    <div><button className="btn" type="submit" disabled={disableButton}>Submit</button></div>
                </form>
            </div>
        );
    };
};

const mapStateToProps = ({authedUser}) => {
    return {
        authedUser,
    }
};

export default connect(mapStateToProps)(AddQuestion);
