require('amd-loader');
const requirejs = require('requirejs');
const chai = require('chai');
const expect = chai.expect;

requirejs.config({
    baseUrl: 'js',
    paths: {
        utils: 'utils',
        main: 'main',
    }
});

requirejs(['main'], (main) => {

});
