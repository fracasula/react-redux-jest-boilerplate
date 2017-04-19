import React from 'react';
import Word from './Word';

const RelatedWords = (props) => (
    <div className="App-related-words">
        <h4>Words related to "{props.selected}"</h4>
        {props.words.length ? (
            props.words.map(w => <Word key={w} word={w}/>)
        ) : (
            <p>No related words were found.</p>
        )}
    </div>
);

export default RelatedWords;
