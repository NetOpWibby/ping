# @webb/ping

> Determine if a URL exists



### Install

```sh
npm i @webb/ping
```



### Usage

```js
import ping from "@webb/ping";

async() => {
  const theLink = await ping("https://example.com");

  if (theLink.exists)
    // do something with it
  else
    // ignore dead links
};
```



## API

### ping(input)

`input` is the URL you want to check, must include protocol prefix (`http://`/`https://`).

#### input

- Type: `String`



## Tests

```sh
# Run all tests, sequentially
$ npm test

# Test dependencies for latest versions
$ npm run test:dependencies

# Lint "src" directory
$ npm run test:typescript

# Test this module
$ npm run test:assert

# Test coverage for the `test:assert` script
$ npm run test:coverage

# Run the included example
$ npm run example
```



## Note

If this module incorrectly reports a live site as not found, that site might be slow to load and/or is configured strangely.
