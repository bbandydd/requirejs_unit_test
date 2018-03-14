define(['jquery'], ($) => {
    const methods = {
        append: arg => {
            $('#app').append(arg);
        },
        getData: () => ({
            data: [
                { id: 1, text: '111'},
                { id: 2, text: '222'},
            ]
        })
    };

    return methods;
});