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

var moduleLogger = function moduleLogger() {
    var obj = this;
    var old = {
        getLogger: obj.getLogger,
        logger: obj.logger
    };

    obj.getLogger = getLogger;
    obj.logger = getLogger();

    return {
        name: 'jm-log4js',
        unuse: function unuse() {
            obj.getLogger = old.getLogger;
            obj.logger = old.logger;
        }
    };
};

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use && global.jm.use(moduleLogger);
}

exports.default = moduleLogger;
module.exports = exports['default'];