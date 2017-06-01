'use strict';

/**
 * Module dependencies.
 */
var assert = require('assert');
var hex2rgba = require('../index');

/**
 * Tests.
 */
describe('hex2rgba', function() {
    it('throws error if first argument is invalid', function() {
        [
            undefined,
            null,
            0,
            false,
            Object,
            Function,
            '',
            'xxx',
            'gggggg',
            '#zzz',
            '#oooooo'
        ].forEach(function(value) {
            assert.throws(function() { hex2rgba(value); });
        });
    });

    it('throws error if hexadecimal length is invalid', function() {
        [
            'b',
            'b0',
            'b000',
            'b000',
            'b0000',
            'b000000',
            '#b',
            '#b0',
            '#b000',
            '#b0000',
            '#b000000'
        ].forEach(function(value) {
            assert.throws(function() { hex2rgba(value); });
        });
    });

    it('converts shorthand hexadecimal', function() {
        assert.equal(hex2rgba('FB1'), 'rgba(255,187,17,1)');
        assert.equal(hex2rgba('1CE'), 'rgba(17,204,238,1)');
    });

    it('converts hexadecimal without `#`', function() {
        assert.equal(hex2rgba('bada55'), 'rgba(186,218,85,1)');
        assert.equal(hex2rgba('A55'), 'rgba(170,85,85,1)');
    })

    it('converts hexadecimal with `#`', function() {
        assert.equal(hex2rgba('#bada55'), 'rgba(186,218,85,1)');
        assert.equal(hex2rgba('#A55'), 'rgba(170,85,85,1)');
    });

    it('converts case-insensitive hexadecimal', function() {
        assert.equal(hex2rgba('C0FFEE'), 'rgba(192,255,238,1)');
        assert.equal(hex2rgba('c0fFEe'), 'rgba(192,255,238,1)');
        assert.equal(hex2rgba('facade'), 'rgba(250,202,222,1)');
        assert.equal(hex2rgba('Facade'), 'rgba(250,202,222,1)');
        assert.equal(hex2rgba('FACADE'), 'rgba(250,202,222,1)');
    });

    it('overrides default alpha value if valid', function() {
        assert.equal(hex2rgba('f00', 0.42), 'rgba(255,0,0,0.42)');
        assert.equal(hex2rgba('ff0000', '0'), 'rgba(255,0,0,0)');
        assert.equal(hex2rgba('#f00', 1), 'rgba(255,0,0,1)');
    });

    it('does not override default alpha value if invalid', function() {
        assert.equal(hex2rgba('f00', 'zero'), 'rgba(255,0,0,1)');
        assert.equal(hex2rgba('f00', -1), 'rgba(255,0,0,1)');
        assert.equal(hex2rgba('f00', 1.1), 'rgba(255,0,0,1)');
    });
});
