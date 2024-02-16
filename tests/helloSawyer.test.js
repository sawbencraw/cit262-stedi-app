
const assert = require('assert');
const hello = require('./hello');
const name = require('./name');

describe('hello function', function() {
    it('should return "Hello"', function() {
        const result = hello();

        assert.strictEqual(result, 'Hello');
    });
});

describe('name function', function() {
    it('should return "Sawyer"', function() {
        const result = name();

        assert.strictEqual(result, 'Sawyer');
    });
});