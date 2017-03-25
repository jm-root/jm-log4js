import logger from './logger';

if (typeof global !== 'undefined' && global) {
    global.jm && global.jm.use(logger);
}

export default logger;
