import React from 'react';
import ReduxComponent from './ReduxComponent';
import {Link} from 'react-router-dom';
import {fetchWordDefinitions} from './../actions';

class Word extends ReduxComponent {
    static ucfirst = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    get word() {
        return this.props.match.params.word;
    };

    componentDidMount() {
        if (this.status().wordDefinitions.word !== this.word) {
            this.dispatch(fetchWordDefinitions(this.word));
        }
    }

    definitions = () => {
        let words = [];
        for (let w of this.status().wordDefinitions.definitions) {
            words.push(<li key={w}>{w}</li>);
        }

        return words;
    };

    render() {
        return (
            <div>
                <h4>"{Word.ucfirst(this.word)}" definitions</h4>
                {this.status().fetching ? (
                    <p><em>Loading...</em></p>
                ) : (
                    this.status().wordDefinitions.definitions.length ?
                        <ul>{this.definitions()}</ul> :
                        <p>No definitions were found.</p>
                )}
                <Link to="/">Go back</Link>
            </div>
        );
    }
}

export default Word;
