import { configureStore, combineReducers } from '@reduxjs/toolkit'
import currentReducer from "./currentSlice"
import resourcesReducer from "./ressourcesSlice"

const store = configureStore({
    reducer: combineReducers({
        ressources: resourcesReducer,
        current: currentReducer
    }),
    devTools: true
});

/*
store.subscribe(()  => {
    console.log(store.getState());
});

store.dispatch({type: 'toto'});
store.dispatch({type:'current/update', payload: {titre: 'bonjour!'}});
store.dispatch({type:'current/clear'});
*/

export default store;
