// Karma configuration
// Generated on Tue Jan 26 2016 17:24:27 GMT+0000 (GMT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'public/styles.min.css', included: true, served: true},
            {pattern: 'tests/specs/**/*.js', included: false},
            {pattern: 'node_modules/requirejs-plugins/**/*.js', included: false},
            {pattern: 'node_modules/chai/chai.js', included: false},
            {pattern: 'node_modules/sinon/pkg/sinon.js', included: false},
            {pattern: 'public/**/*.js', included: true, served: true},
            {pattern: 'public/js/app/config/*.js', included: false, served: false},
            {pattern: 'public/js/libs/*.js', included: false, served: false},
            {pattern: 'public/**/*.css', included: false, served: true},
            {pattern: 'public/images/**/**', included: false, served: true},
            {pattern: 'public/fonts/**/**', included: false, served: true},
            'tests/assets/karma-runner.js'
        ],

        // list of files to exclude
        exclude: [

        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {

        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,


        // enable / disable watching file and executing tests whenever any file chan ges
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        // browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
