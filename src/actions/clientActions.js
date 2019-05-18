import {ADD_CLIENT} from './types';
export const addClient = (client) =>{
    return{
        type: ADD_CLIENT,
        payload: client
    }
}