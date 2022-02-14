import {combineReducers} from 'redux';
import {UserAppState} from '@redux/types/stores/user';
import userReducer from './user/reducer';
import blockerReducer from './blocker/reducer';
import {BlockerAppState} from '@redux/types/stores/blocker';




export interface RootState {
    userReducer: UserAppState;
    blockerReducer: BlockerAppState;
    
}

const rootReducer = combineReducers({
    userReducer,
    blockerReducer,
    
});



export default rootReducer;
