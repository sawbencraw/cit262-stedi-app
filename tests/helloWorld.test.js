
const assert = require('assert');
const hello = require('./hello');

describe('hello function', function() {
    it('should return "Hello"', function() {
        const result = hello();

        assert.strictEqual(result, 'Hello');
    });
});
