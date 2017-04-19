import React, {Component} from 'react';

class SearchBox extends Component {
    submit = (e) => {
        if (e.target === this.refs.input) {
            if (e.key === 'Enter') {
                this.props.submit(this.refs.input.value);
            }
        } else {
            this.props.submit(this.refs.input.value);
        }
    };

    componentDidMount() {
        if (this.refs.input) {
            this.refs.input.focus();
        }
    }

    render() {
        let disabled = this.props.disabled;

        return (
            <div className="App-search-box">
                <input
                    className="App-search-box-input"
                    ref="input"
                    type="text"
                    placeholder={this.props.placeholder}
                    readOnly={disabled}
                    onKeyPress={this.submit}
                />

                <button className="App-search-box-btn" onClick={this.submit} disabled={disabled}>
                    {this.props.buttonLabel || 'Search'}
                </button>
            </div>
        );
    }
}

export default SearchBox;
