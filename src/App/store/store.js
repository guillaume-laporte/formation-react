import { configureStore, combineReducers } from '@reduxjs/toolkit'
import currentReducer, { update, saveCurrent } from "./currentSlice"
import resourcesReducer, { fetchAllRessources } from "./ressourcesSlice"
import { emptyMeme } from "orsys-tjs-meme"

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

// console.log("on apelle aussi une action comme ça - ", update({id: 12}));
// store.dispatch(update(emptyMeme));

// store.dispatch(fetchAllRessources());
// store.dispatch(saveCurrent(emptyMeme));
// const test = await fetch('http://localhost:7777/images');
// console.log("test gla - ", await test.json());

export default store;
