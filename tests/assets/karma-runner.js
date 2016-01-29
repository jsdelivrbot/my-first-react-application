if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) {
        var target = this;
        if (typeof target !== 'function') {
            throw new Error('Error, you must bind a function.');
        }
        var args = Array.prototype.slice.call(arguments, 1); // for normal call
        var bound = function () {
            if (this instanceof bound) {
                var F = function () {
                };
                F.prototype = target.prototype;
                var self = new F();
                var result = target.apply(
                    self,
                    args.concat(Array.prototype.slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return self;
            } else {
                return target.apply(
                    that,
                    args.concat(Array.prototype.slice.call(arguments))
                );
            }
        };
        return bound;
    };
}

console.warn = console.info = console.error = function(){};

if (window.navigator.userAgent.indexOf('PhantomJS') !== -1) {
    console.log = function(){};
}

// solves a sinon fake server bug: https://github.com/cjohansen/Sinon.JS/issues/319
if(navigator.userAgent.indexOf('PhantomJS') !== -1) {
    window.ProgressEvent = function(type, params) {
        params = params || {};
        this.lengthComputable = params.lengthComputable || false;
        this.loaded = params.loaded || 0;
        this.total = params.total || 0;
    };
}

var amd = {};
amd.__config = {};
amd.config = function (obj) {
    amd.__config = obj;
};
amd.getConfig = function () {
    return this.__config;
};
amd.require = require;
amd.define = define;

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
		if (/\/base\/tests\/specs\/.*.js/.test(file)) {
            // console.debug(file);
            tests.push(file);
		}
    }
}

require.config({
    'baseUrl': '/base',
    'paths': {
        'chai'              : 'node_modules/chai/chai',
        'sinon'             : 'node_modules/sinon/pkg/sinon',
        'mocha'             : 'node_modules/mocha/mocha',
        'app'               : 'public/js/app',
        'metrics-dashboard' : 'public/js/app/components/metrics-dashboard',
        'react'             : 'public/js/libs/react.min',
        'reactDOM'          : 'public/js/libs/react-dom.min'
    },
    'shim': {
        'sinon': {
            'exports': 'sinon'
        }
        // ,
        // 'reactDOM': {
        //     deps: ['react']
        // },
        // 'app' : {
        //     deps: ['react', 'reactDOM'],
        //     exports: 'Application'
        // }
    }
});


function start() {
    require.config({
        deps: tests,
        callback: window.__karma__.start
    });
}

start();
