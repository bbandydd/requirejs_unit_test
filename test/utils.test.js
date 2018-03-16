const utils = require('../js/utils');

const mockJQ = { append: jest.fn() };

test('utils should return true', () => {
    const app = utils(mockJQ);
    const data = app.getData();
    expect(data.data[0].id).toBe(1);
});