module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'public/styles.css' : 'public/styles/scss/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'public/styles/scss/*.scss',
                    'public/styles/scss/**/*.scss'
                ],
                tasks: ['sass', 'cssmin']
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/styles.min.css': ['public/styles.css']
                }
            }
        },
        mocha: {
            test: {
                src: ['tests/index.html']
            },
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'public',
                    mainConfigFile: [
                        'build/require.config.js',
                        'public/js/app/config/amd.js'
                    ],
                    generateSourceMaps: false,
                    name: 'js/main',
                    out: 'public/main.min.js',
                    removeCombined: true,
                    findNestedDependencies: true,
                    uglify: {
                        beautify: false,
                        mangle: false
                    }
                }
            }
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 9001,
                    base: '_src'
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');


    // grunt.registerTask('connect', 'connect');
    grunt.registerTask('test', ['mocha']);
    grunt.registerTask('default',['watch']);
    grunt.registerTask('minify', ['requirejs']);
};
