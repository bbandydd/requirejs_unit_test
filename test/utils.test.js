require('amd-loader');
const chai = require('chai');
const expect = chai.expect;

define(['../js/utils.js'], (utils) => {
    describe('utils', () => {
        it('should get data', () => {
            const data = {
                data: [
                    { id: 1, text: '111'},
                    { id: 2, text: '222'},
                ]
            };

            expect(utils.getData()).to.deep.equal(data);
        });
    });
});