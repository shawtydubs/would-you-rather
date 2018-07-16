import {AUTHED_USER} from '../actions/authedUser'

export default function authedUser (state = null, action) {
    switch (action.type) {
        case AUTHED_USER:
            return action.id
        default:
            return state
    }
}
