require.config({
    'baseUrl': '../../public',
    'paths': {
        'specs': '../../tests/specs',
        'mocha': '../../node_modules/mocha/mocha',
        'chai': '../../node_modules/chai/chai',
        'sinon': '../../node_modules/sinon/pkg/sinon'
    },
    'shim': {
        'mocha': {
            'exports': 'mocha'
        },
        'sinon': {
            'exports': 'sinon'
        }
    }
});

//console.warn = console.debug = console.info = function() {};

// solves a sinon fake server bug: https://github.com/cjohansen/Sinon.JS/issues/319

console.log('USER-AGENT');
console.log(navigator.userAgent);

if(navigator.userAgent.indexOf('PhantomJS') !== -1) {
    window.ProgressEvent = function(type, params) {
        params = params || {};
        this.lengthComputable = params.lengthComputable || false;
        this.loaded = params.loaded || 0;
        this.total = params.total || 0;
    };
}

require(['mocha', 'chai'], function(mocha, chai) {
    mocha.setup('bdd');
    if(window.mochaPhantomJS) {
        window.mochaPhantomJS.run();
    }
    else {
        mocha.run();
    }
});