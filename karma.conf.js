'use strict';

// Karma configuration
// Generated on Wed Feb 17 2016 17:56:06 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
      'app/bower_components/ng-lodash/build/ng-lodash.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-resource/angular-resource.js',
      // endbower
      'app/index.js',
      'app/src/**/*.module.js',
      'app/src/**/*.js',
      'app/src/**/*.html',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/src/**/*.js': ['babel', 'browserify'],
      'app/src/**/*.html': ['ng-html2js'],
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/',
      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },

    browserify: {
      debug: true,
      transform: [
        ['babelify', {
          presets: ['env']
        }]
      ]
    },

    watchify: {
      poll: true
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome', 'Firefox', 'Safari'], // Chrome, Firefox, Safari


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
