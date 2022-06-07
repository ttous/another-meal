// https://github.com/facebook/create-react-app/issues/11756#issuecomment-1001130053
module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.resolve.fallback = {
    crypto: require.resolve("crypto-browserify"),
    fs: false,
    path: false,
    os: false,
    process: false,
  };

  return config;
};
