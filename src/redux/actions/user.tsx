import { IUser,IUserFromServer } from '@redux/types/IData';
import types from '@redux/reducers/user/types';
import Api from '../../API';
import {setLoading} from './blocker';

export const setUserData = (data: IUser | IUserFromServer) => {
    return {type: types.SET_USER, data: data }
}
export const setUserAvatar = (data: number) => {
    return {type: types.SET_AVATAR, data: data}
}
export const resetUserData = () => {
    return {type: types.RESET_USER_DATA}
}
export const sendUserData = (data: string) => (dispatch: (arg0: {type: string; data:  boolean | IUserFromServer}) => void) => {
    dispatch(setLoading(true));
    return Api.post('/game-users', data)
        .then((response) => {
            dispatch(setUserData(response?.data))
            return response.data.data;
        })
        .catch((error) => {
            throw error;
        })
        .finally(() => dispatch(setLoading(false)));
};
export const updateUserData = (data: string, id : string) => (dispatch: (arg0: {type: string; data:  boolean | IUserFromServer}) => void) => {
    dispatch(setLoading(true));
    return Api.post(`/characters/add/${id}`, data)
        .then((response) => {
            dispatch(setUserData(response?.data))
            return response.data.data;
        })
        .catch((error) => {
            throw error;
        })
        .finally(() => dispatch(setLoading(false)));
};
export const deleteFromUserData = (data: string, id : string) => (dispatch: (arg0: {type: string; data:  boolean | IUserFromServer}) => void) => {
    dispatch(setLoading(true));
    return Api.post(`/characters/remove/${id}`, data)
        .then((response) => {
            dispatch(setUserData(response?.data))
            return response.data.data;
        })
        .catch((error) => {
            throw error;
        })
        .finally(() => dispatch(setLoading(false)));
};