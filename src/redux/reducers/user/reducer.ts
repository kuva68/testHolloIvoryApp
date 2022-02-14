import {IAction} from '@redux/types/IAction';
import USER_TYPES from './types';

const initialState = {
    
    team: '',
    name: '',
    number: null,
    logoId: null,
    characters: []
    
};

const userReducer = (state = initialState, action: IAction<string>) => {
    switch (action.type) {
        case USER_TYPES.SET_USER:
            return {
                ...state,
                ... action?.data
            };
        case USER_TYPES.SET_AVATAR:
            return {
                ...state,
                logoId: action?.data
                };
        case USER_TYPES.RESET_USER_DATA:
            return initialState
        default:
            return state;
    }
};

export default userReducer;
