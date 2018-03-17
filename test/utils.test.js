const utils = require('../js/utils');
const $ = require('jquery');

const mock = {
    jq: jest.fn(),
};

mock.jq.mockReturnValue({
    append: jest.fn()
});

describe('Utils', () => {
    let app;

    beforeEach(() => {
        app = utils(mock.jq);
    })

    it('append', () => {
        app.append('<p>test</p>');
        expect(mock.jq().append.mock.calls.length).toBe(1);
    })

    it('getData', () => {
        const data = app.getData();
        const matchObject = {"data": [{"id": 1, "text": "111"}, {"id": 2, "text": "222"}]};

        expect(data).toEqual(matchObject);
    });
});

describe('Utils document', () => {
    it('should append dom', () => {
        document.body.innerHTML = '<div id="app"></div>';
        const app = utils($);
        const html = '<p>test</p>';
        app.append(html);
        expect($('#app').html()).toBe(html);
    });
});