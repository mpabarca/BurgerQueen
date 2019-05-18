import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducerPrincipal from './reducers/reducer';

const initialState={};
const middleware=[thunk];

//local storage
//const storageState= localStorage.getItem('state a modificar') ? JSON.parse(localStorage.getItem('state a modificar')) : [];

//agregar storageState en initialState
const store= createStore(reducerPrincipal,initialState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;