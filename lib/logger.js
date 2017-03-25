'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLogger = function getLogger(loggerCategoryName) {
    return _log4js2.default.getLogger(loggerCategoryName);
};

exports.default = function (jm) {
    jm.getLogger = getLogger;
    jm.logger = getLogger();
};

module.exports = exports['default'];