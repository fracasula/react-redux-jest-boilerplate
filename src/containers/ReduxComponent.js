import {Component} from 'react';
import PropTypes from 'prop-types';

class ReduxComponent extends Component {
    status = () => {
        return this.context.store.getState();
    };

    dispatch = (action) => {
        return this.context.store.dispatch(action);
    };
}

ReduxComponent.contextTypes = {
    store: PropTypes.object.isRequired
};

export default ReduxComponent;
