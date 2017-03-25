import log4js from 'log4js';
let getLogger = (loggerCategoryName) => {
    return log4js.getLogger(loggerCategoryName);
};

export default (jm) => {
    jm.getLogger = getLogger;
    jm.logger = getLogger();
};
