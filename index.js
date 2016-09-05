module.exports = {
  plugins: [
    [require('babel-plugin-dotenv'), {
      replacedModuleName: 'react-native-dotenv'
    }],
  ],
};
