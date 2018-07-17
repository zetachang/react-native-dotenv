# react-native-dotenv

Let you `import` environment variables from a **.env** file in React Native, **don't** need any native code integration.

[![CircleCI](https://circleci.com/gh/zetachang/react-native-dotenv.svg?style=svg)](https://circleci.com/gh/zetachang/react-native-dotenv)
[![npm version](https://img.shields.io/npm/v/react-native-dotenv.svg?style=flat-square)](https://www.npmjs.com/package/react-native-dotenv)
[![npm downloads](https://img.shields.io/npm/dt/react-native-dotenv.svg?style=flat-square)](https://www.npmjs.com/package/react-native-dotenv)

## Install

```sh
$ npm install react-native-dotenv --save-dev
```

Add the `react-native-dotenv` preset to your **.babelrc** file at the project root.

### RN (0.56+) (Babel 7)
```json
{
  "presets": ["react-native", "module:react-native-dotenv"]
}
```

### RN (<0.56)
```json
{
  "presets": ["react-native", "react-native-dotenv"]
}
```

If you haven't got **.babelrc** set up for React Native, remember to install `babel-preset-react-native` first.

```sh
$ npm install babel-preset-react-native --save-dev
```

## Usage

Add your app configuration in an **.env** file.

```
API_KEY=lorem
ANOTHER_CONFIG=foobar
```

Now you can import it in your **.js** file.

```js
import { API_KEY, ANOTHER_CONFIG } from 'react-native-dotenv'

ApiClient.init(API_KEY, ANOTHER_CONFIG)
```

## How does it work?

As you can see, it's implemented as a babel plugin. All referenced imported members are replaced as the values specified in the **.env** file.

The example above will get compiled as below.

```js

ApiClient.init('lorem', 'foobar')
```

## FAQ

### Changes to .env file is not updated

Manually edit the file importing `react-native-dotenv` by either adding an empty line or whitespace will work.

### Can I use different **.env** settings for production ?

Yes, simply create a separate **.env.production** file and the default release process of react-native will pickup the right config.

#### iOS

You can use the **Release** configuration to launch the Simulator. (Only supported in RN v0.39+)

```
react-native run-ios --configuration Release
```
#### Android

1. `Command⌘` + `M` to launch the developer menu in Android emulator.
2. Tap **DevSettings**.
3. Toggle **JS Dev Mode**.

### Can I have more than `production` & `development` environment configs?

Sadly, it's not available so far. One of the workaround is generating **.env** file before triggering RN's bundle script automatically using either shell script or your own custom build pipeline.

## Contact

[David Chang](http://github.com/zetachang)
[@zetachang](https://twitter.com/zetachang)

## LICENSE

MIT License, see LICENSE file for detail.
