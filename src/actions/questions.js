import {saveQuestion} from '../utils/api';

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
