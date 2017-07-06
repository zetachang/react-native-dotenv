var config = require("metro-bundler/rn-cli.config");

module.exports = {
  plugins: [
    [require('babel-plugin-dotenv'), {
      replacedModuleName: 'react-native-dotenv',
      configDir: config.getProjectRoots()[0]
    }],
  ],
};
