import {combineReducers} from 'redux';
import {
    REQUEST_WORD,
    RELATED_WORDS,
    WORD_DEFINITIONS,
    FETCHING,
    ERROR
} from './../actions';

const selectedWord = (state = null, action) => {
    switch (action.type) {
        case REQUEST_WORD:
            return action.word;
        default:
            return state;
    }
};

const relatedWords = (state = [], action) => {
    switch (action.type) {
        case RELATED_WORDS:
            return action.relatedWords;
        default:
            return state;
    }
};

const wordDefinitions = (state = {word: null, definitions: []}, action)  => {
    switch (action.type) {
        case WORD_DEFINITIONS:
            return {
                word: action.word,
                definitions: action.definitions
            };
        default:
            return state;
    }
};

const fetching = (state = false, action)  => {
    switch (action.type) {
        case FETCHING:
            return action.fetching;
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case ERROR:
            return action.error;
        default:
            return state;
    }
};

const reducers = combineReducers({
    selectedWord,
    relatedWords,
    wordDefinitions,
    fetching,
    error
});

export default reducers;
