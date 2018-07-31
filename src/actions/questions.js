import {saveQuestion, saveQuestionAnswer} from '../utils/api';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOneText, optionTwoText, author) {
    return (dispatch) => {
        return saveQuestion({optionOneText, optionTwoText, author})
            .then(question => dispatch(addQuestion(question)))
    }
}

function addQuestionAnswer (authedUser, id, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        id,
        answer,
    }
}

export function handleSaveQuestionAnswer (authedUser, id, answer) {
    return (dispatch) => {
        return saveQuestionAnswer({authedUser, id, answer})
            .then(() => dispatch(addQuestionAnswer(authedUser, id, answer)));
    }
}

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
