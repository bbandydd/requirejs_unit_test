const utils = require('../js/utils');
const jquery = require('jquery');
// const mockJQ = { append: jest.fn() };

test('utils should return true', () => {

    document.body.innerHTML =  '<div id="app"></div>';
    const app = utils(jquery);
    const data = app.getData();
    expect(data.data[0].id).toBe(1);
    app.append('asdfasdf');
    console.log(document.body.innerHTML);
});