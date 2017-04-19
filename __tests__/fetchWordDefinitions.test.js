import mockStore from 'redux-mock-store';
import {fetchWordDefinitions} from '../src/actions';

describe('Async fetch of word definitions', () => {
    it('fetches a word definitions', async () => {
        const mockedResponse = [
            {text: 'First definition'},
            {text: 'Second definition'},
            {text: 'Third definition'}
        ];

        fetch.mockResponse(JSON.stringify(mockedResponse));

        const store = mockStore({});
        await store.dispatch(fetchWordDefinitions('whatever'));

        expect(store.getActions()).toEqual([
            {type: 'ERROR', error: null},
            {type: 'FETCHING', fetching: true},
            {
                type: 'WORD_DEFINITIONS',
                word: 'whatever',
                definitions: [
                    "First definition",
                    "Second definition",
                    "Third definition"
                ]
            },
            {type: 'FETCHING', fetching: false}
        ]);
    });

    it('fetches a word with no definitions', async () => {
        const mockedResponse = [];

        fetch.mockResponse(JSON.stringify(mockedResponse));

        const store = mockStore({});
        await store.dispatch(fetchWordDefinitions('whatever'));

        expect(store.getActions()).toEqual([
            {type: 'ERROR', error: null},
            {type: 'FETCHING', fetching: true},
            {
                type: 'WORD_DEFINITIONS',
                word: 'whatever',
                definitions: []
            },
            {type: 'FETCHING', fetching: false}
        ]);
    });
});
