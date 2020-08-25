import {ADD_MOVIES,ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITES} from '../actions';
import {combineReducers} from 'redux';
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialMovieState,action)
{
    // if(action.type===ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type)
   { 
       case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITE:
            const filteredArray=state.favourites.filter(
                movie=>movie.Title!==action.movie.Title
            );
            return{
                ...state,
                favourites:filteredArray
            };
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        default:
            return(state);

    }

}
const initialSearchState={
    results:{}
};
export function search(state=initialSearchState,action){
    return state;
}
//without combinereducer function
// const initialRootState={
//     movies:initialMovieState,
//     search:initialSearchState
// }
// export default function rootReducer(state=initialRootState,action)
// {
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
//function to combine reducers provided by redux
export default combineReducers({
    movies:movies,//reducer
    search:search
})

//const ADD_MOVIES='ADD_MOVIES'