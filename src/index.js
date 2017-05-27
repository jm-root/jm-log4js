import log4js from 'log4js';
let getLogger = (loggerCategoryName) => {
    return log4js.getLogger(loggerCategoryName);
};

let moduleLogger = (obj) => {
    obj.getLogger = getLogger;
    obj.logger = getLogger();
};

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use && global.jm.use(moduleLogger);
}

export default moduleLogger;
