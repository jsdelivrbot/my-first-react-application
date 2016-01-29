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
        uglify: {
            my_target: {
                files: {
                    'public/main.min.js': [
                        'public/js/*.js',
                        'public/js/app/*.js',
                        'public/js/app/**/*.js',
                    ]
                }
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
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['mocha']);
    grunt.registerTask('default',['watch']);
    grunt.registerTask('ugger', [
        'uglify', 'cssmin'
    ]);
};
