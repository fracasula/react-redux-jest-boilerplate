const API_BASE_URL = 'http://api.wordnik.com/v4';
const API_KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

export const REQUEST_WORD = 'REQUEST_WORD';
export const RELATED_WORDS = 'RELATED_WORDS';
export const WORD_DEFINITIONS = 'WORD_DEFINITIONS';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

export const requestWord = word => ({
    type: REQUEST_WORD,
    word
});

export const relatedWords = relatedWords => ({
    type: RELATED_WORDS,
    relatedWords
});

export const wordDefinitions = (word, definitions) => ({
    type: WORD_DEFINITIONS,
    word,
    definitions
});

export const fetching = fetching => ({
    type: FETCHING,
    fetching: !!fetching
});

export const error = err => ({
    type: ERROR,
    error: err
});

export const fetchRelatedWords = word => dispatch => {
    dispatch(error(null));
    dispatch(requestWord(word));
    dispatch(fetching(true));

    return fetch(`${API_BASE_URL}/word.json/${word}/relatedWords?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(json => json.filter(list => list.relationshipType === 'same-context'))
        .then(list => list.map(list => list.words))
        .then(list => {
            dispatch(relatedWords(list[0] !== undefined ? list[0] : []));
            dispatch(fetching(false));
        })
        .catch(err  => {
            dispatch(error(err));
            dispatch(fetching(false));
        });
};

export const fetchWordDefinitions = word => dispatch => {
    dispatch(error(null));
    dispatch(fetching(true));

    return fetch(`${API_BASE_URL}/word.json/${word}/definitions?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(list => list.map(list => list.text))
        .then(list => {
            dispatch(wordDefinitions(word, list !== undefined ? list : []));
            dispatch(fetching(false));
        })
        .catch(err  => {
            dispatch(error(err));
            dispatch(fetching(false));
        });
};
