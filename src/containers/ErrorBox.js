import React from 'react';
import ReduxComponent from './ReduxComponent';

class ErrorBox extends ReduxComponent {
    render() {
        let message = this.status().error instanceof Error ?
            this.status().error.message :
            this.status().error;

        return (
            <div style={{color: 'red'}}>
                <p>{message}</p>
            </div>
        )
    };
}

export default ErrorBox;
