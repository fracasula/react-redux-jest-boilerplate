import fetch from 'isomorphic-fetch';

const API_BASE_URL = 'http://api.wordnik.com/v4';
const API_KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

class WordnikClient {
    static relatedWords = (word, callback) => {
        fetch(`${API_BASE_URL}/word.json/${word}/relatedWords?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(json => json.filter(list => list.relationshipType === 'same-context'))
            .then(list => list.map(list => list.words))
            .then(list => {
                if (list[0] !== undefined) {
                    callback(null, list[0]);
                } else {
                    callback(null, []);
                }
            })
            .catch(err  => {
                callback(err, null);
            });
    };
}

export default WordnikClient;
