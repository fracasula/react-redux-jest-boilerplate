# [React](https://facebook.github.io/react/) / [Redux](http://redux.js.org/docs/introduction/) / [React Router](https://reacttraining.com/react-router/) / [Jest](https://facebook.github.io/jest/) boilerplate

This repository is a just a simple demo that works as a boilerplate to get you started with React and some of the most popular
libraries that are usually found around it (e.g. Redux, Jest, Babel, React Router...).

The application is calling the [Wordnik API](http://developer.wordnik.com/docs.html) to fetch words in the same context as
the one provided. Once some related words are fetched is possible to get a single word definition.

You'll find some sample unit tests done with [Jest](https://facebook.github.io/jest/) where the [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
is mocked to avoid making real HTTP calls in the tests.

There's also [snapshot testing](https://facebook.github.io/jest/docs/snapshot-testing.html) in place with Jest.
Remember snapshots are meant to be pushed in the repository so that your tests can fail if a change happens.
It's a very useful tool whenever you want to make sure your UI does not change unexpectedly.
After your tests fail you can review the change and resubmit the new snapshot if it contains only expected changes.
