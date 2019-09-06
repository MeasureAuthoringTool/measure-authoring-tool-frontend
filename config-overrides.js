/* eslint-disable */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function (config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new MonacoWebpackPlugin(),
  );

  return config;
};
