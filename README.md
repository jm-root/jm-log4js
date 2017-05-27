# jm-log4js
log4js module

```javascript
var moduleLogger = require('jm-log4js');

var log = function(logger) {
    ['debug','info','warn','error'].forEach(function(level) {
        logger[level](level);
    });
};

//global.jm
log(jm.logger);
log(jm.getLogger('main'));

//create new jm
var jm2 = new require('jm-core')()
        .use(moduleLogger)
    ;
log(jm2.logger);
log(jm2.getLogger('main'));
```
