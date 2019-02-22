import React                from 'react';
import ReactDOM             from 'react-dom';
import './index.css';
import TodoApp              from './TodoApp';
import * as serviceWorker   from './serviceWorker';
import { createStore, applyMiddleware, compose }      from 'redux';
import { Provider }         from 'react-redux';
import rootReducer          from './rootReducer';
import { BrowserRouter }    from 'react-router-dom';
import thunk                from 'redux-thunk';


const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

)
//Connects our react application to the redux store, Provider allows any component to connect to redux store
ReactDOM.render(
<Provider store={ store }>
    <BrowserRouter>
        <TodoApp />  
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
