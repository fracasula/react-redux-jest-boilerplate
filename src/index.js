import React from 'react';
import ReactDOM from 'react-dom';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import Root from './containers/Root';
import reducers from './reducers';

let middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

const render = () => {
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();

