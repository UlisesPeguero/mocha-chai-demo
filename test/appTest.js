const { assert, Assertion } = require('chai');
const app = require('../app');

// results to test
const result = {
    app: {
        test: app.test(),
        numbersTest: app.numbersTest(2, 2)
    }
}

describe('App', () => {
    describe('test()', () => {
        it('Should return "test"', () => {
            assert.equal(result.app.test, 'test');
        });

        it('Should be a string', () => {
            assert.isString(result.app.test);
        });
    });

    describe('numbersTest()', () => {
        it('should be above 5', () => {
            assert.isAbove(result.app.numbersTest, 5);
        });
        it('Should be a number', () => {
            assert.isNumber(result.app.numbersTest);
        });
    });
});