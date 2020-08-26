import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
// const logger=function ({dispatch,getState})
//     {
//         return function(next)
//         {
//             return function(action)
//             {
//                 //middleware code
//                 console.log('action_type=',action.type);
//                 next(action);
//             }
//         }
//     }
const logger=({dispatch,getState})=>(next)=>(action)=>{
    if(typeof action !== 'function')
    {
     console.log('ACTION_TYPE=',action.type);
    }
    //logger code

next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//     if(typeof action==='function')
//     {
//         action(dispatch);
//         return;
//     }
// next(action);
// }
const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);
// console.log('Before state',store.getState());
// store.dispatch({

//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });
// console.log('After state',store.getState());
ReactDOM.render(<App store={store}/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
