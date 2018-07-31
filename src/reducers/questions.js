import {ADD_QUESTION, ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS} from '../actions/questions';

export default function questions (state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            const {question} = action;

            return {
                ...state,
                [question.id]: question
            };
        case ADD_QUESTION_ANSWER:
            const {authedUser, id, answer} = action;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    [answer]: {
                        ...state[id][answer],
                        votes: state[id][answer].votes.concat([authedUser])
                    }
                }
            }
        case RECEIVE_QUESTIONS:
            const {questions} = action;

            return questions;
        default:
            return state;
    }
}
