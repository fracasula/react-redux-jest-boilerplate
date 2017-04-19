import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Word from './Word';
import ErrorBox from './ErrorBox';
import Header from './../components/Header';

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/word/:word" component={Word}/>
                <ErrorBox/>
            </div>
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
