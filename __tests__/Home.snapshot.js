import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import mockStore from 'redux-mock-store';
import Home from './../src/containers/Home';

test('Home snapshot', () => {
    const store = mockStore({});

    const container = renderer.create(
        <Provider store={store}>
            <Home/>
        </Provider>
    );

    let tree = container.toJSON();
    expect(tree).toMatchSnapshot();
});
