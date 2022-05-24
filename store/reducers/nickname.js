import {UPDATE_NICK_NAME} from "../actions/nickname";

const initialState = {
    nickName: '',
};

const nickNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NICK_NAME:
            return {...state, nickName: action.nickName}
        default:
            return state;
    }
}

export default nickNameReducer;