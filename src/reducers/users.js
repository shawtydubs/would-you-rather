import {ADD_QUESTION_ANSWER} from '../actions/questions';
import {RECEIVE_USERS} from '../actions/users';

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case ADD_QUESTION_ANSWER:
            const {authedUser, id, answer} = action;

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [id]: answer
                    }
                }
            };
        default:
            return state
    }
}
