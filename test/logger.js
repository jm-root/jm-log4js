import chai from 'chai';
import $ from 'jm-core';
import Logger from '../src/logger';

let expect = chai.expect;
let log = function (logger) {
    ['debug', 'info', 'warn', 'error', 'fatal'].forEach(function (level) {
        logger[level] && (logger[level](`${level}`));
    });
};
describe('logger', function () {
    let jm = new $()
            .use(Logger)
        ;

    it('jm.logger', function () {
        expect(jm.logger).to.be.an('object');
        expect(Logger).to.be.an('function');
        log(jm.logger);
    });

    it('jm.getLogger', function () {
        expect(jm.getLogger).to.be.a('function');
        let logger = jm.getLogger('main');
        expect(logger).to.be.an('object');
        log(logger);
    });
});

describe('global', function () {
    jm.use(Logger);
    it('jm.logger', function () {
        expect(jm.logger).to.be.an('object');
        expect(Logger).to.be.an('function');
        log(jm.logger);
    });

    it('jm.getLogger', function () {
        expect(jm.getLogger).to.be.a('function');
        let logger = jm.getLogger('main');
        expect(logger).to.be.an('object');
        log(logger);
    });
});
