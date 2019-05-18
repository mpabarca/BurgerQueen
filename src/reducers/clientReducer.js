import {ADD_CLIENT} from '../actions/types';

const initialState = {
    users: []
};

export default function (state=initialState , action){
    switch(action.type){
        case ADD_CLIENT:
            return{
                ...state,
                clients:[...state.clients, action.payload]
            }
    }
}