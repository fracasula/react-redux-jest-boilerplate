import React from 'react';
import SearchBox from './../components/SearchBox';
import RelatedWords from './../components/RelatedWords';
import ReduxComponent from './ReduxComponent';
import {fetchRelatedWords} from './../actions';

class Home extends ReduxComponent {
    search = (value) => {
        if (value !== this.status().selectedWord) {
            this.dispatch(fetchRelatedWords(value));
        }
    };

    render() {
        let loading = !!this.status().fetching;

        return (
            <div>
                <SearchBox placeholder="Search..." submit={this.search} disabled={loading}/>
                {loading ? (
                    <p><em>Loading...</em></p>
                ) : (
                    this.status().selectedWord ? (
                        <RelatedWords
                            selected={this.status().selectedWord}
                            words={this.status().relatedWords}
                        />
                    ) : ''
                )}
            </div>
        );
    }
}

export default Home;
