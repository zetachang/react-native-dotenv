var path = require('path');

module.exports = () => ({
  plugins: [
    [require('babel-plugin-dotenv'), {
      replacedModuleName: 'react-native-dotenv',
      configDir: path.resolve(__dirname, "../../")
    }],
  ],
});
