var baseConfig = require('./karma.conf.js');

module.exports = function (config) {

    // Load base config
    baseConfig(config);

    // Override base config
    config.set({

        singleRun: true,

        colors:    false,

        autoWatch: false,

        reporters: ['progress', 'junit', 'coverage'],

        preprocessors:    {

            'src/main/webapp/js/**/*.js':   ['coverage']

        },

        browsers:  ['PhantomJS'],

        plugins : [
                    'karma-junit-reporter',
                    'karma-chrome-launcher',
                    'karma-phantomjs-launcher',
                    'karma-firefox-launcher',
                    'karma-jasmine',
                    'karma-coverage'
                    ],

        junitReporter: {
            outputDir:  'target/surefire-reports/',
            outputFile: 'target/surefire-reports/TEST-karma.xml'

        },

        coverageReporter: {

            type:   'lcov',

            dir:    'target/karma-coverage'

        }

    });

};

