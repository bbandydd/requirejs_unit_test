const dependencies = ['jquery', 'utils'];

const main = ($, utils) => {
    $('#app').append('<div>123123</div>');
    utils.append('<div>56746538535</div>');
};

if (typeof define !== 'undefined') define(dependencies, main);

if (typeof module !== 'undefined' && typeof require !== 'undefined') module.exports = main;