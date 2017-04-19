import React from 'react';
import {Link} from 'react-router-dom';

const Word = (props) => (
    <div className="App-word">
        <Link to={"/word/" + props.word}>{props.word}</Link>
    </div>
);

export default Word;
