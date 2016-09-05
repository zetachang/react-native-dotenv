# react-native-dotenv

Let you `import` environment variables from a **.env** file in React Native, **don't** need any native code integration.

[![CircleCI](https://circleci.com/gh/zetachang/react-native-dotenv.svg?style=svg)](https://circleci.com/gh/zetachang/react-native-dotenv)
[![npm version](https://img.shields.io/npm/v/react-native-dotenv.svg?style=flat-square)](https://www.npmjs.com/package/react-native-dotenv)
[![npm downloads](https://img.shields.io/npm/dt/react-native-dotenv.svg?style=flat-square)](https://www.npmjs.com/package/react-native-dotenv)

## Install

```sh
$ npm install react-native-dotenv --save-dev
```

If you haven't got **.babelrc** set up for React Native, run

```sh
$ npm install babel-preset-react-native --save-dev
```

And create a file named **.babelrc** as follow in the project root.

```json
{
  "presets": ["react-native", "react-native-dotenv"]
}
```

## Usage

Add your app configuration in an **.env** file.

```
API_KEY=lorem
ANOTHER_CONFIG=foobar
```

And import it in your **.js** file.

```js
import { API_KEY, ANOTHER_CONFIG } from 'react-native-dotenv'

ApiClient.init(API_KEY, ANOTHER_CONFIG)
```

## How it works?

As you can see, it's implemented as a babel plugin. All referenced imported members are replaces as the values specified in the **.env** file.

The example above will get compiled as below.

```js

ApiClient.init('lorem', 'foobar')
```

## Benefits we got

* It could find out error like importing an non-existing variable.

![](error.png)

* Zero native code integration required. (compared to [react-native-config](https://github.com/luggit/react-native-config))
* Given that we use the existing [dotenv](https://www.npmjs.com/package/dotenv) package to parse **.env** file, the same config file could be reused in nodejs environment.

## Contact

[David Chang](http://github.com/zetachang)
[@zetachang](https://twitter.com/zetachang)

## LICENSE

MIT License, see LICENSE file for detail.
