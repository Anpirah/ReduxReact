

import { createStore, combineReducers } from 'redux';
import todosReducer from '../redux/todosSlice';

// Combina todos los reducers si hay más de uno en el futuro
const rootReducer = combineReducers({
  todos: todosReducer,
});

// Crea el store de Redux
const store = createStore(rootReducer);

export default store;
