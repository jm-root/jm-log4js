import log4js from 'log4js';
let getLogger = (loggerCategoryName) => {
    return log4js.getLogger(loggerCategoryName);
};
let logger = getLogger();

let moduleLogger = function () {
    let obj = this;
    let old = {
        getLogger: obj.getLogger,
        logger: obj.logger,
    };

    obj.getLogger = getLogger;
    obj.logger = logger;

    return {
        name: 'jm-log4js',
        unuse: function () {
            obj.getLogger = old.getLogger;
            obj.logger = old.logger;
        },
    };
};

moduleLogger.getLogger = getLogger;
moduleLogger.logger = logger;

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use && global.jm.use(moduleLogger);
}

export default moduleLogger;
