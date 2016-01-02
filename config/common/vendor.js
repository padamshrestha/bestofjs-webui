// Returns the array of node modules bundled into the 'vendor' file.
module.exports = function () {
  return [
    'react',
    'react-router',
    'redux',
    'react-redux',
    'redux-simple-router',
    'redux-thunk',
    'history',
    'es6-promise',
    'axios',
    'redux-form',

    'scroll-behavior/lib/useScrollToTop',

    // only include here the functions we use from Lodash
    'lodash/function/debounce',

    'vague-time', // light equivalent to 'moment' module
    'numeral', // use to format numbers using "k" prefix
    'slideout' // slide navigation menu
  ];
};
