const OpenProps = require('open-props');

module.exports = {
  plugins: [require('postcss-preset-env')({}), require('postcss-jit-props')(OpenProps)],
};
