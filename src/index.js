import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger=({dispatch,getState})=>(next)=>(action)=>{
    if(typeof action !== 'function')
    {
     console.log('ACTION_TYPE=',action.type);
    }
    //logger code
next(action);
}
const store=createStore(rootReducer,applyMiddleware(thunk));
console.log('inital store',store.getState());
ReactDOM.render(<App store={store}/>,document.getElementById('root'));

