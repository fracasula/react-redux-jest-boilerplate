import mockStore from 'redux-mock-store';
import {fetchRelatedWords} from '../src/actions';

describe('Async fetch of related words', () => {
    it('fetches related words', async () => {
        const mockedResponse = [{
            relationshipType: 'same-context',
            words: [
                "judge",
                "tribunal",
                "court",
                "witness",
                "attorney"
            ]
        }];

        fetch.mockResponse(JSON.stringify(mockedResponse));

        const store = mockStore({});
        await store.dispatch(fetchRelatedWords('whatever'));

        expect(store.getActions()).toEqual([
            {type: 'ERROR', error: null},
            {type: 'REQUEST_WORD', word: 'whatever'},
            {type: 'FETCHING', fetching: true},
            {type: 'RELATED_WORDS', relatedWords: [
                "judge",
                "tribunal",
                "court",
                "witness",
                "attorney"
            ]},
            {type: 'FETCHING', fetching: false}
        ]);
    });

    it('fetches no related words', async () => {
        const mockedResponse = [{
            relationshipType: 'same-context',
            words: []
        }];

        fetch.mockResponse(JSON.stringify(mockedResponse));

        const store = mockStore({});
        await store.dispatch(fetchRelatedWords('whatever'));

        expect(store.getActions()).toEqual([
            {type: 'ERROR', error: null},
            {type: 'REQUEST_WORD', word: 'whatever'},
            {type: 'FETCHING', fetching: true},
            {type: 'RELATED_WORDS', relatedWords: []},
            {type: 'FETCHING', fetching: false}
        ]);
    });

    it('fetches a response without related words', async () => {
        const mockedResponse = [{
            relationshipType: 'whatever',
            words: []
        }];

        fetch.mockResponse(JSON.stringify(mockedResponse));

        const store = mockStore({});
        await store.dispatch(fetchRelatedWords('whatever'));

        expect(store.getActions()).toEqual([
            {type: 'ERROR', error: null},
            {type: 'REQUEST_WORD', word: 'whatever'},
            {type: 'FETCHING', fetching: true},
            {type: 'RELATED_WORDS', relatedWords: []},
            {type: 'FETCHING', fetching: false}
        ]);
    });
});
