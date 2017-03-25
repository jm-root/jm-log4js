'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(_logger2.default);
}

exports.default = _logger2.default;
module.exports = exports['default'];