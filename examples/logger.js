var $ = require('jm-core');
var moduleLogger = require('../');

var log = function(logger) {
    ['debug','info','warn','error'].forEach(function(level) {
        logger[level](level);
    });
};

//global.jm
log(jm.logger);
log(jm.getLogger('main'));

//create new jm
var jm2 = new $()
        .use(moduleLogger)
    ;
log(jm2.logger);
log(jm2.getLogger('main'));
