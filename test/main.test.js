const $ = require('jquery');
const main = require('../js/main');

const mock = {
    utils: {
        append: jest.fn(),
    }
};

describe('Main', () => {
    let app;

    beforeEach(() => {
        document.body.innerHTML = '<div id="app"></div>';
        app = main($, Object.assign({}, mock.utils));
    })

    it('append <div>123123</div> and mock utils should be called', () => {
        const html = '<div>123123</div>';
        expect($('#app').html()).toBe(html);
        expect(mock.utils.append.mock.calls.length).toBe(1);
    })
});