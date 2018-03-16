const dependencies = ['jquery'];

const utils = ($) => ({
    append: arg => {
        $('#app').append(arg);
    },
    getData: () => ({
        data: [
            { id: 1, text: '111'},
            { id: 2, text: '222'},
        ]
    })
})

if (typeof define !== 'undefined') define(dependencies, utils);

if (typeof module !== 'undefined' && typeof require !== 'undefined') module.exports = utils;