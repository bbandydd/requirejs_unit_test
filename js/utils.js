const dependencies = ['jquery']

const utils = ($) => {
    const utils = {
        append: arg => {
            $('#app').append(arg);
        },
        getData: () => ({
            data: [
                { id: 1, text: '111' },
                { id: 2, text: '222' },
            ]
        })
    };

    return utils;
};

if (typeof define !== 'undefined') define(dependencies, utils);

if (typeof module !== 'undefined' && typeof require !== 'undefined') {
    module.exports = utils;
}

