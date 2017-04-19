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

## To get started

You can use a local node/npm installation but I suggest using a single-run docker container for development purposes.
You could use something like [this](https://github.com/fracasula/mean-docker) or make your own if you want to expose different ports and add different features.

* `npm install` *OR*
  * `docker run -it --rm -v $(pwd):/data -p 49160:8000 mean-docker npm install`
* `npm start` *OR*
  * `docker run -it --rm -v $(pwd):/data -p 49160:8000 mean-docker npm start`

The local server is now running. Check by going to [http://localhost:49160/](http://localhost:49160/)

To run the tests:

* `npm test` *OR*
  * `docker run -it --rm -v $(pwd):/data -p 49160:8000 mean-docker npm test`
  
Enjoy **:-D**
